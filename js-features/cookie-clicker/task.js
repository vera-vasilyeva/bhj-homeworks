"use strict";
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
    const clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.textContent ++;
    if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}
   