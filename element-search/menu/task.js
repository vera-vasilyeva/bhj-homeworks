
const menuLinks = document.querySelectorAll(".menu__link");

for (let menuLink of menuLinks) {
    menuLink.onclick = function() {
    const menuSub = menuLink.parentElement.querySelector(".menu_sub");
        if (menuSub) {
            if (menuSub.classList.contains("menu_active")) {
                menuSub.classList.remove("menu_active")
            } else {
                menuSub.classList.add("menu_active")
            }
            return false;
        }
    }
}    