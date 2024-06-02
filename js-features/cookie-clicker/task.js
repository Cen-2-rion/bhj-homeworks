// находим необходимые элементы
const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");

// вставляем элемент "Скорость клика" в DOM
const div = `<div class="clicker__status"> Скорость клика: <span id="clicker__speed">0</span></div>`;
cookie.insertAdjacentHTML("beforeBegin", div);

let start = Date.now(); // точка отсчёта

cookie.onclick = function() {
  
  (cookie.width === 200) ? cookie.width = 220 : cookie.width = 200; // увеличиваем или уменьшаем печеньку при клике

  // увеличиваем счётчик кликов и скорость клика при каждом клике
  const clicker__speed = document.getElementById("clicker__speed");
  clicker__counter.textContent++;
  clicker__speed.textContent = (1 / ((Date.now() - start) / 1000)).toFixed(2);
  start = Date.now(); // обновляем точку отсчёта при каждом клике
}
