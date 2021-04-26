"use strict";
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const getHole = index => document.getElementById(`hole${index}`);
const reset = function() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {  
    const hole =  getHole(i);
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        } 
        if (dead.textContent == 10) {
            alert("Вы победили!")
            reset();
        }
        if (lost.textContent == 5) {
            alert("Вы проиграли!")
            reset();
        }
    }
}