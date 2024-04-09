const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

clear = () => {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 10; i++) {
  getHole(i).onclick = () => {
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
