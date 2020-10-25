<script>
  import { createTask, createBoom } from "./helpers.js";
  import { random } from "./helpers.js";
  import { Roos, Booms } from "./data.js";
  import { roolette } from "./data.js";
  import { pop } from "./data.js";
  import { isDark } from "./data.js";
  import Schedule from "./Schedule.svelte";

  let textString = "";
  let showBoomerang = false;
  let days = [false, false, false, false, false, false, false];

  function submitTask() {
    textString = textString.trim();
    if (textString != "") {
      let task = createTask(textString);
      $Roos.push(task); //appends task to end of array
      Roos.set($Roos); //refresh array - let svelte know this value has changed so it needs to update UI
      //a simpler way of writing push and set is $Roos = $Roos.concat([task])
      pop("Roohoo!");
    }
    textString = "";
  }

  function toggleDay(dayIndex) {
    days[dayIndex] = !days[dayIndex];
  }

  function toggleBoom() {
    showBoomerang = !showBoomerang;
  }

  function submitBoom() {
    textString = textString.trim();
    if (textString != "") {
      let boom = createBoom(textString, days);
      $Booms.push(boom); //appends task to end of array
      Booms.set($Booms); //refresh array - let svelte know this value has changed so it needs to update UI
      //a simpler way of writing push and set is $Roos = $Roos.concat([task])
      pop("Roohoo!");
    }
    textString = "";
    showBoomerang = false;
    days = [false, false, false, false, false, false, false];
  }

  function playRoolette() {
    let filteredRoolette = roolette.filter(item => {
      //return a list of items not found already in the UI
      return !$Roos.find(roo => roo.text.toLowerCase() == item.toLowerCase());
    });
    if (filteredRoolette.length > 0) {
      let randomRoo = random(filteredRoolette);
      let task = createTask(randomRoo);
      $Roos.push(task);
      Roos.set($Roos);
    }
  }
</script>

<style>
  #form {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
  }

  #form #text {
    display: flex;
    width: 100%;
    flex: 1;
    margin: 20px;
  }

  #form .buttons {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  :global(body.darkMode) .buttons {
    border-color: white;
    color: white;
  }

  #enter {
    margin-right: 10px;
  }

  input::placeholder {
    color: #626262;
  }

  :global(.spacing) {
    margin: 20px 0px;
  }
</style>

<div id="form">
  <h1>
    New roo,
    <br />
    <span class="linetwo">New you!</span>
  </h1>
  <h2>Schedule a roo</h2>
  <input type="text" placeholder="to doo" bind:value={textString} />
  <div class="buttons">
    <button class="button" id="enter" on:click={submitTask}>T'day mate</button>
    <button class="button" id="boomerang" on:click={toggleBoom}>
      Boomerang
    </button>
    <!-- Roolette -->
    <!-- <button id="Roolette" on:click={playRoolette}>Roolette</button> -->
  </div>
  {#if showBoomerang}
    <Schedule className="spacing" {days} {toggleDay} />
    <button class="button" on:click={submitBoom}>Submit</button>
  {/if}
</div>
