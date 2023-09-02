const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('fa-solid');
    navbar.classList.remove('open');
}