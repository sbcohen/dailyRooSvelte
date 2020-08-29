<script>
  import { createTask } from "./helpers.js";
  import { random } from "./helpers.js";
  import { Roos } from "./data.js";
  import { roolette } from "./data.js";

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

  function playRoolette(event) {
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
  h1 {
    font-family: "Luckiest Guy";
    font-size: 44px;
    font-weight: 100;
    text-align: center;
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
  .linetwo {
    font-size: 52px;
  }

  h2 {
    font-family: "Luckiest Guy";
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 20px;
    position: relative;
  }

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

  .button {
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

  #enter {
    margin-right: 10px;
  }

  input::placeholder {
  }
</style>

<div id="form">
  <h1>
    New roo,
    <br />
    <span class="linetwo">new you!</span>
  </h1>
  <input type="text" placeholder="to doo" bind:value={textString} />
  <div class="buttons">
    <button class="button" id="enter" on:click={submitTask}>T'day mate</button>
    <a class="button" href="#boomerang">Boomerang</a>
    <!-- Roolette -->
    <!-- <button id="Roolette" on:click={playRoolette}>Roolette</button> -->
  </div>

</div>
