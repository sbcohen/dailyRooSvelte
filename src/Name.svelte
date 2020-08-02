<script>
  import { name } from "./data.js";

  export let onClose = () => {}; //anonymous function that doesn't do anything
  //hey svelte, this is a property that other users of this component can specify and its default value is an empty function.
  //think of an existing html componet (such as div) having class and id properties
  function submitName(event) {
    $name = $name.trim();
    if ($name != "") {
      onClose();
    }
  }

  function close(event) {
    if (!event.target.closest("#innermodal")) {
      onClose();
    }
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 64px; /* creates a gutter of sorts to adapt to screen size*/
    box-sizing: border-box; /* makes width include padding - always use this */
    background: rgba(0, 0, 0, 0.75);
  }

  .modal > div {
    width: 100%;
    background: linear-gradient(-11deg, #d98988 20%, #a37094 85%);
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    font-size: 24px;
  }

  .modal > div > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .button {
    padding: 10px 20px;
    border: 1px solid black;
    background: linear-gradient(-11deg, #d9a0a2 20%, #d09ba5 80%);
  }

  .button:hover {
    background-color: #f4d670;
  }
</style>

<div class="modal" id="modal" on:click={close}>
  <div id="innermodal">
    <div>Enter your name</div>
    <input type="text" placeholder="mate" bind:value={$name} />
    <div class="button" on:click={submitName}>Save</div>
  </div>
</div>
