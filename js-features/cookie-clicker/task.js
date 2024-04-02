let str = '<div class="clicker__status">Скорость клика: <span id="clicker__speed">0</span></div>';
document.body.innerHTML += str;

const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
const clicker__speed = document.getElementById("clicker__speed");

let start = Date.now();

cookie.onclick = function() {
  
  (cookie.width === 200) ? cookie.width = 220 : cookie.width = 200;

  clicker__counter.textContent++;
  clicker__speed.textContent = (1 / ((Date.now() - start) / 1000)).toFixed(2);
  console.log("Скорость клика: ", clicker__speed);
  start = Date.now();
}
