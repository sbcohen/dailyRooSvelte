<style>
h1 {
  font-family: "Luckiest Guy";
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 60px;
}
</style>

<script>
//Welcome greeting
import { Load } from './helpers.js';
  let myDate = new Date();
  let hrs = myDate.getHours();
  
  let greet;
  let name = Load("myName", "Stefanie");
$: {
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  }

//   document.getElementById("Greeting").innerHTML = greet + ", " + Load("myName", "");

</script>

<h1>{greet}, {name}!</h1>