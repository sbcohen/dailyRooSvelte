<script>
  import { createTask } from "./helpers.js";
  import { Roos } from "./data.js";

  let textString = "";

  function submitTask(event) {
    textString = textString.trim();
    if (textString != "") {
      let task = createTask(textString);
      $Roos.push(task); //appends task to end of array
      Roos.set($Roos); //refresh array - let svelte know this value has changed so it needs to update UI
      //a simpler way of writing push and set is $Roos = $Roos.concat([task])
    }
    textString = "";
  }
</script>

<style>
  #form {
    margin: 20px;
    margin-bottom: 0px;
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
    margin: 20px 0px;
  }

  #enter {
    font-size: 24px;
    padding: 20px;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    flex-grow: 1;
    flex: 1;
    left: 0;
  }

  #Roolette {
    font-size: 24px;
    padding: 20px;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    flex-grow: 1;
    flex: 1;
    right: 0;
  }
</style>

<div id="form">
  <input type="text" bind:value={textString} />
  <div class="buttons">
    <button id="enter" on:click={submitTask}>Submit</button>
    <!-- Roolette -->
    <button id="Roolette">Roolette!</button>
  </div>

</div>
