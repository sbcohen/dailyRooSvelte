<script>
  import { createTask, sortList } from "./helpers.js";
  import { Roos, deleteTask } from "./data.js";

  function toggleChecked(task) {
    task.done = !task.done;
    Roos.set($Roos);
  }

  let sortedList;
  $: {
    sortedList = sortList($Roos);
  }
</script>

<style>
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
    background-color: rgba(235, 235, 235, 0.25);
    border-style: solid;
    border-width: thin;
    border-color: black;
    display: flex;
    height: 56px;
    min-height: 56px;
  }

  :global(body.darkMode) .list-item {
    border-color: white;
  }

  .checked .text {
    /* :checked matches any checked/selected radio, checkbox, or option */
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    height: 28px;
    width: 28px;
    margin: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-size: 24px;
    vertical-align: top;
    padding: 14px 0px;
    margin-left: 0px;
    display: flex;
    flex: 1;
  }

  /* Delete X */
  .delete {
    display: flex;
    padding: 14px;
    align-items: center;
    font-size: 24px;
  }
</style>

<div class="list" id="list">
  {#each sortedList as task}
    <!-- #each loops over each list item and applies transformation -->
    <div class="list-item" class:checked={task.done}>
      <input
        type="checkbox"
        bind:checked={task.done}
        on:click={() => toggleChecked(task)} />
      <div class="text">{task.text}</div>
      <div class="delete" on:click={() => deleteTask(task)}>{'\u2715'}</div>
    </div>
  {/each}
</div>
