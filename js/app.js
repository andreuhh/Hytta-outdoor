const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
 header.classList.toggle('header__menu--open');
})

// script accordion
var acc = document.getElementsByClassName("accordion__btn");
var i;

for(i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}