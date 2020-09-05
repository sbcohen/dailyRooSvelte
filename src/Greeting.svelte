<script>
  //Welcome greeting
  import { Load } from "./helpers.js";
  import { name } from "./data.js";
  import { onMount } from "svelte";
  import { isDark } from "./data.js";

  export let onClick = () => {};
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
</style>

{#if $isDark == true}
  <h1 on:click={onClick}>G'Night, {$name}!</h1>
{:else}
  <h1 on:click={onClick}>G'Day, {$name}!</h1>
{/if}
