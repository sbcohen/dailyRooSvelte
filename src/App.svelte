<script>
  import HomePage from "./HomePage.svelte";
  import BoomerangPage from "./BoomerangPage.svelte";
  import NewRooPage from "./NewRoo.svelte";
  import { onMount } from "svelte";
  import kangarooFull from "./images/kangarooFull.svg";
  import add from "./images/add.svg";
  import home from "./images/home.svg";
  import boomerang from "./images/boomerang.svg";
  import stars from "./images/stars.svg";
  import { isDark } from "./data.js";
  import { toast } from "./data.js";
  import { Booms, Roos, lastBoom } from "./data.js";
  import { createTask } from "./helpers.js";
  import { deleteTask } from "./data.js";

  onMount(loadApp);
  let page = location.hash;

  function loadApp() {
    window.addEventListener("hashchange", hashChange);
    console.log("it worked!");
    update();
    //to get time of day
    let timerID = setInterval(update, 60 * 1000); //time in milliseconds to rerun function

    return () => {
      clearInterval(timerID); //called on unMount (this is just in good practice)
    };
  }

  function update() {
    //function that repeatedly updates the date/time
    let myDate = new Date();
    let isNight = myDate.getHours() > 20 || myDate.getHours() < 5; //isNight will be true or false
    //isNight = true; // uncomment for darkmode testing
    document.body.classList.toggle("darkMode", isNight == true);
    $isDark = isNight;

    //function that repeated checks what day it is and reloads new booms/cleans up old
    //the next 2 lines are hacky - don't panic - we'll come back and fix it
    myDate.setHours(0, 0, 0, 0); //rewind the time to midnight of the current day (h, m, s, ms)
    if (myDate.getTime() != new Date($lastBoom).getTime()) {
      //new Date by default gives current time BUT if you pass something through new Date, if
      cleanUp();
      loadBoom();
      $lastBoom = myDate; //tracks last time we noted the date change from one day to the other
    }
  }

  function hashChange() {
    page = location.hash;
    console.log("you hash-changed!");
  }

  function matchMaker(boom) {
    // function that asks does this boom already exist in myRoo ($Roos)?
    for (let i = 0; i < $Roos.length; i++) {
      let roo = $Roos[i];
      if (roo.text == boom.text) {
        return false; //no go
      }
    }
    return true; //go
  }

  function loadBoom() {
    console.log($lastBoom);
    let dayIndex = new Date().getDay();
    console.log(dayIndex);
    for (let i = 0; i < $Booms.length; i++) {
      let boom = $Booms[i];
      console.log(boom);
      if (boom.days[dayIndex] == true) {
        // checks if current day of week matches with a Boomerang assigned to that day
        if (matchMaker(boom) == true) {
          let task = createTask(boom.text); // copies the boom from myBoom into myRoo
          $Roos.push(task); //appends task to end of array
          Roos.set($Roos); //refresh array - let svelte know this value has changed so it needs to update UI
          //a simpler way of writing push and set is $Roos = $Roos.concat([task])
          console.log("true!");
        }
      }
    }
  }

  function cleanUp() {
    let trash = [];
    for (let i = 0; i < $Roos.length; i++) {
      let roo = $Roos[i];
      if (roo.done == true) {
        trash.push(roo);
      }
    }
    for (let i = 0; i < trash.length; i++) {
      deleteTask(trash[i]);
    }
  }
</script>

<style>
  :global(body),
  :global(html) {
    background: linear-gradient(-11deg, #f8d645 5%, #eb7461 30%, #844379 70%);
    background-attachment: fixed;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    margin: auto;
  }

  :global(body.darkMode) {
    background: linear-gradient(-11deg, #330155 10%, #010157 50%, #030006 80%);
    color: white;
  }

  :global(#app) {
    height: 100%;
  }
  :global(h1) {
    font-family: "Luckiest Guy";
    font-size: 44px;
    font-weight: 100;
    text-align: center;
    margin: 60px 20px 40px 20px;
  }

  :global(body.darkMode h1) {
    color: white;
  }

  :global(.linetwo) {
    font-size: 52px;
  }

  :global(h2) {
    font-family: "Luckiest Guy";
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  :global(input[type="text"]) {
    outline: 0;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    font-size: 24px;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  :global(body.darkMode input[type="text"]) {
    border-color: white;
    color: white;
  }

  :global(.button) {
    font-family: "Luckiest Guy";
    font-size: 24px;
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 24px 0px 16px 0px;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    flex-grow: 1;
    flex: 1;
    left: 0;
  }

  :global(body.darkMode .button) {
    border-color: white;
    color: white;
  }

  .ux {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .toaster {
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
    text-align: center;
    margin-bottom: 100px;
    pointer-events: none;
  }

  .toast {
    background: rgba(0, 0, 0, 0.75);
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    display: inline-block;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .toast.show {
    opacity: 1;
    transition: opacity 1s;
  }

  .nav {
    height: calc(100% - 48px);
    overflow-y: auto;
  }
  .spacer {
    height: 10px;
  }

  .backsplash {
    height: 65%;
    position: fixed;
    opacity: 0.25;
    bottom: 0;
    left: 0;
  }

  .stars {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .navbar {
    display: flex;
    height: 48px; /* change calc rule in .nav if edit height in px */
    padding: 8px;
    box-sizing: border-box;
    background: black;
  }
  .pages {
    display: flex;
    flex: 1;
    height: 100%;
    color: #f8d645;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }

  .pages > img {
    width: 100%;
    height: 100%;
  }
</style>

<img src={kangarooFull} class="backsplash" alt="kangaroo" />
{#if $isDark == true}
  <img src={stars} class="stars" alt="stars" />
{/if}

<div class="ux">
  <div class="nav">
    {#if page == '#home'}
      <HomePage />
    {:else if page == '#boomerang'}
      <BoomerangPage />
    {:else if page == '#newroo'}
      <NewRooPage />
    {:else}
      <HomePage />
    {/if}
    <div class="spacer" />
  </div>

  <div class="navbar">
    <a class="pages" href="#newroo">
      <img src={add} alt="new roo" />
    </a>
    <a class="pages" href="#home">
      <img src={home} alt="home" />
    </a>
    <a class="pages" href="#boomerang">
      <img src={boomerang} alt="boomerang" />
    </a>
  </div>
</div>

<div class="toaster">
  <div class="toast" class:show={$toast.show}>{$toast.text}</div>
</div>
