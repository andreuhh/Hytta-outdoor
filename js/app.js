const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
 header.classList.toggle('header__menu--open');
})

// script accordion
/*var acc = document.getElementsByClassName("accordion__btn");
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
}*/

// accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});






