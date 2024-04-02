const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i <= 10; i++) {
  getHole(i).onclick = () => {
    getHole(i).classList.contains('hole_has-mole') ? dead.textContent++ : lost.textContent++;
    
    if (dead.textContent == 10) {
      alert('Победа!');
    }
    if (lost.textContent == 5) {
      alert('Вы проиграли');
    }
  }
}
