<script>
  import { Booms, deleteBoom } from "./data.js";
  import Schedule from "./Schedule.svelte";

  function changeBoom(task, dayIndex) {
    console.log(task, dayIndex);
    task.days[dayIndex] = !task.days[dayIndex];
    Booms.set($Booms); //refresh array - let svelte know this value has changed so it needs to update UI
  }
</script>

<style>
  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .list {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 20px;
  }

  .list-item {
    font-size: 18px;
    align-items: center;
    vertical-align: middle;
    margin-bottom: 20px;
    padding: 14px;
    background-color: rgba(235, 235, 235, 0.25);
    border-style: solid;
    border-width: thin;
    border-color: black;
    display: flex;
  }

  :global(body.darkMode) .list-item {
    border-color: white;
  }

  .left {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .text {
    font-size: 24px;
    vertical-align: top;
    margin-left: 0px;
    margin-bottom: 14px;
    display: flex;
  }

  /* Delete X */
  .delete {
    display: flex;
    padding-left: 14px;
    align-items: center;
    font-size: 24px;
  }
</style>

<div class="app">
  <div class="top">
    <h1>Boomerangs</h1>
  </div>
  <div class="list" id="list">
    {#each $Booms as task}
      <!-- #each loops over each list item and applies transformation -->
      <div class="list-item">
        <div class="left">
          <div class="text">{task.text}</div>
          <Schedule
            className="date-picker"
            toggleDay={dayIndex => changeBoom(task, dayIndex)}
            days={task.days} />
        </div>
        <div class="delete" on:click={() => deleteBoom(task)}>{'\u2715'}</div>
      </div>
    {/each}
  </div>
</div>
