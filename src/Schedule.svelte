<script>
  export let days = [];
  export let toggleDay = () => {};
  export let className = "";
</script>

<style>
  .schedule {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .day {
    display: flex;
    border-radius: 50%;
    border: 1px solid #f7f79e44;
    width: 32px;
    height: 32px;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }
  .on {
    background: #f7f79e;
    color: black;
  }
</style>

<div class="schedule {className}">
  <div class="day" class:on={days[0] == true} on:click={() => toggleDay(0)}>
    S
  </div>
  <div class="day" class:on={days[1] == true} on:click={() => toggleDay(1)}>
    M
  </div>
  <div class="day" class:on={days[2] == true} on:click={() => toggleDay(2)}>
    T
  </div>
  <div class="day" class:on={days[3] == true} on:click={() => toggleDay(3)}>
    W
  </div>
  <div class="day" class:on={days[4] == true} on:click={() => toggleDay(4)}>
    T
  </div>
  <div class="day" class:on={days[5] == true} on:click={() => toggleDay(5)}>
    F
  </div>
  <div class="day" class:on={days[6] == true} on:click={() => toggleDay(6)}>
    S
  </div>
</div>
