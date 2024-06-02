// находим необходимые элементы
const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

// обнуляем счетчики
clear = () => {
  dead.textContent = 0;
  lost.textContent = 0;
}

// добавляем слушателей на каждую дырку
for (let i = 1; i <= 10; i++) {
  getHole(i).onclick = () => {
    // если при клике в дырке был крот, то засчитываем победу, иначе поражение
    getHole(i).classList.contains('hole_has-mole') ? dead.textContent++ : lost.textContent++;
    
    if (dead.textContent == 10) {
      alert('Победа!');
      clear();
    }
    
    if (lost.textContent == 5) {
      alert('Вы проиграли');
      clear();
    }
  }
}
