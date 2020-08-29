<script>
  import HomePage from "./HomePage.svelte";
  import BoomerangPage from "./BoomerangPage.svelte";
  import { onMount } from "svelte";
  import kangaroo from "./images/kangaroo.svg";
  console.log(kangaroo);

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
  .ux {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .nav {
    height: 100%;
  }

  .backsplash {
    height: 100%;
    position: fixed;
    opacity: 0.25;
  }
  .navbar {
    display: flex;
    height: 72px;
    background: black;
  }
  .pages {
    display: flex;
    flex: 1;
    height: 100%;
    color: #f8d645;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }
</style>

<img src={kangaroo} class="backsplash" alt="kangaroo" />
<div class="ux">
  <div class="nav">
    {#if page == '#home'}
      <HomePage />
    {:else if page == '#boomerang'}
      <BoomerangPage />
    {:else}
      <HomePage />
    {/if}

  </div>
  <div class="navbar">
    <div class="pages">New Roo</div>
    <a class="pages" href="#home">Home</a>
    <a class="pages" href="#boomerang">Boomerang</a>
  </div>
</div>
