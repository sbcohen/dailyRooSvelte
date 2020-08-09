<script>
  import HomePage from "./HomePage.svelte";
  import BoomerangPage from "./BoomerangPage.svelte";
  import { onMount } from "svelte";

  onMount(loadApp);
  let page = location.hash;

  function loadApp() {
    window.addEventListener("hashchange", hashChange);
    console.log("it worked!");
  }
  function hashChange() {
    page = location.hash;
    console.log("you hash-changed!");
  }
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

  :global(input[type="text"]) {
    outline: 0;
    border: 1px solid black;
    background: rgba(235, 235, 235, 0.25);
    font-size: 24px;
    padding: 10px 20px;
  }
</style>

{#if page == '#home'}
  <HomePage />
{:else if page == '#boomerang'}
  <BoomerangPage />
{:else}
  <HomePage />
{/if}
