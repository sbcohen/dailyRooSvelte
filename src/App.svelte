<script>
  import HomePage from "./HomePage.svelte";
  import BoomerangPage from "./BoomerangPage.svelte";
  import NewRooPage from "./NewRoo.svelte";
  import { onMount } from "svelte";
  import kangaroo from "./images/kangaroo.svg";
  import checkmark from "./images/checkmark.svg";
  import home from "./images/home.svg";
  import boomerang from "./images/boomerang.svg";
  import { isDark } from "./data.js";
  import { toast } from "./data.js";

  let myDate = new Date(); //renders initial date when page is first run

  onMount(loadApp);
  let page = location.hash;

  function loadApp() {
    window.addEventListener("hashchange", hashChange);
    console.log("it worked!");
    //to get time of day
    let timerID = setInterval(() => {
      //function that repeatedly updates the date/time
      myDate = new Date();
      let isNight = myDate.getHours() > 20 || myDate.getHours() < 5; //isNight will be true or false
      //isNight = true; // uncomment for darkmode testing
      document.body.classList.toggle("darkMode", isNight == true);
      $isDark = isNight;
    }, 60 * 1000); //time in milliseconds to rerun function
    return () => {
      clearInterval(timerID); //called on unMount (this is just in good practice)
    };
  }
  function hashChange() {
    page = location.hash;
    console.log("you hash-changed!");
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
    background: black;
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
    position: relative;
  }

  :global(input[type="text"]) {
    outline: 0;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    font-size: 24px;
    padding: 10px 20px;
  }

  :global(.button) {
    font-family: "Luckiest Guy";
    font-size: 24px;
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 20px 0px;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    flex-grow: 1;
    flex: 1;
    left: 0;
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
    height: calc(100% - 72px);
  }

  .backsplash {
    height: 100%;
    position: fixed;
    opacity: 0.25;
  }
  .navbar {
    display: flex;
    height: 72px;
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
</style>

<img src={kangaroo} class="backsplash" alt="kangaroo" />

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
  </div>

  <div class="navbar">
    <a class="pages" href="#newroo">
      <img src={checkmark} alt="new roo" />
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
