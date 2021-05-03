"use strict";
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success")
const modalClose = document.getElementsByClassName("modal__close");

modalMain.classList.add("modal_active");

for (let modalCloseItem of modalClose) {
    modalCloseItem.onclick = function() {
        modalCloseItem.closest(".modal_active").classList.remove("modal_active");
    }
}

const showSuccess = modalClose.item(1);
showSuccess.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}

