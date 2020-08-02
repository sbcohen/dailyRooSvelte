<script>
  //Welcome greeting
  import { Load } from "./helpers.js";
  import { name } from "./data.js";
  import { onMount } from "svelte";

  export let onClick = () => {};

  let myDate = new Date(); //renders initial date when page is first run

  //called one time when compenent gets added to the page
  onMount(() => {
    //onMount(function() {});
    let timerID = setInterval(() => {
      //function that repeatedly updates the date/time
      myDate = new Date();
    }, 60 * 1000); //time in milliseconds to rerun function
    return () => {
      clearInterval(timerID); //called on unMount (this is just in good practice)
    };
  });

  let hrs; //establishes global variable

  let greet;

  $: {
    //anything in $: gets repeated when myDate updates in the setInterval function
    hrs = myDate.getHours();
    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  }
</script>

<style>
  h1 {
    font-family: "Luckiest Guy";
    font-size: 40px;
    font-weight: 100;
    text-align: center;
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 60px;
  }
</style>

<h1 on:click={onClick}>{greet}, {$name}!</h1>
