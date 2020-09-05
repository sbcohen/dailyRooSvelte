<script>
  import List from "./List.svelte";
  import Greeting from "./Greeting.svelte";
  import NewRoo from "./NewRoo.svelte";
  import Name from "./Name.svelte";

  let showModal = false;

  function openModal() {
    showModal = true;
  }
  function closeModal() {
    showModal = false;
  }
</script>

<style>
  h2 {
    margin: 0px 20px 0px 20px;
    vertical-align: middle;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .top {
    margin-bottom: 20px;
    text-align: center;
  }
</style>

<div class="app">
  {#if showModal}
    <Name onClose={closeModal} />
  {/if}
  <div class="top">
    <Greeting onClick={openModal} />
    <h2>Your daily roo's</h2>
  </div>
  <List />
</div>
