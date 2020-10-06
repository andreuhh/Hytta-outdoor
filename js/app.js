// scrolling script
document.addEventListener('DOMContentLoaded', function() {
    const easeFunctions = {
        easeInQuad: function(t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad: function(t, b, c, d) {
            t /= d;
            return -c * t * (t - 2) + b;
        }
    }
    const moveTo = new MoveTo({
        ease: 'easeInQuad'
    }, easeFunctions);
    const triggers = document.getElementsByClassName('js-trigger');
    for (var i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }

    
});

//////////////////////////////////////////////////////


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


// slider

const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

   if(track.offsetWidth - (index * carouselWidth) < carouselWidth) {
       next.classList.add('hide');
   }
});

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if(index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
});


