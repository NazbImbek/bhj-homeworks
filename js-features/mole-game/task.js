const holes = document.querySelectorAll(".hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reset () {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 0; i <= holes.length; i++) {
  holes[i].onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    
    if (dead.textContent == 10) {
      alert('Ура, вы победили!');
      reset ();
    }
    if (lost.textContent == 5) {
      alert('Увы, вы проиграли!');
      reset ();
    }    
  }
}