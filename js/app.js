const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
 header.classList.toggle('header__menu--open');
})