<script>
  import { createTask } from "./helpers.js";
  import { random } from "./helpers.js";
  import { Roos } from "./data.js";
  import { roolette } from "./data.js";
  import { pop } from "./data.js";

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
    return function() {
      days[dayIndex] = !days[dayIndex];
    };
  }

  function toggleBoom() {
    showBoomerang = true;
  }

  function submitBoom() {}

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

  #enter {
    margin-right: 10px;
  }

  input::placeholder {
    color: #626262;
  }

  .schedule {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    padding: 20px 0px;
  }
  .day {
    display: flex;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }
  .on {
    background: #eedb76;
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
    <div class="schedule">
      <div class="day" class:on={days[0] == true} on:click={toggleDay(0)}>
        S
      </div>
      <div class="day" class:on={days[1] == true} on:click={toggleDay(1)}>
        M
      </div>
      <div class="day" class:on={days[2] == true} on:click={toggleDay(2)}>
        T
      </div>
      <div class="day" class:on={days[3] == true} on:click={toggleDay(3)}>
        W
      </div>
      <div class="day" class:on={days[4] == true} on:click={toggleDay(4)}>
        T
      </div>
      <div class="day" class:on={days[5] == true} on:click={toggleDay(5)}>
        F
      </div>
      <div class="day" class:on={days[6] == true} on:click={toggleDay(6)}>
        S
      </div>
    </div>
    <button class="button" on:click={submitBoom}>Submit</button>
  {/if}
</div>
