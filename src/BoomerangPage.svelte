<script>
  function goBack() {
    history.back();
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
</style>

<h1>
  New roo,
  <br />
  <span class="linetwo">new you!</span>
</h1>
<div on:click={goBack}>back</div>
<p>Hello, World!</p>
