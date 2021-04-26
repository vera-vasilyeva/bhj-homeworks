"use strict";
const countDown = function() {
    const timer = document.getElementById("timer");
    console.log(timer.textContent);
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!"); 
        clearInterval(count);           
    }
}
const count = setInterval(countDown, 1000);

