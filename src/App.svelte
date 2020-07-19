<script>
  import List from "./List.svelte";
  import Greeting from "./Greeting.svelte";
  import NewRoo from "./NewRoo.svelte";
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

  :global(#app) {
    height: 100%;
  }

  h2 {
    font-family: "Luckiest Guy";
    font-size: 28px;
    margin: 9px;
    margin-left: 20px;
    margin-bottom: 9px;
    position: relative;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<div class="app">
  <div class="top">
    <Greeting />
    <h2>Roo's left to doo</h2>
  </div>
  <List />
  <NewRoo />
</div>
