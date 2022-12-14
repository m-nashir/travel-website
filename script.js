const navbar = document.querySelector('.navbar');

window.addEventListener ('scroll', function(){
    navbar.classList.toggle ('sticky', window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let menuNavbar = document.querySelector('.menu-navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    menuNavbar.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark')
    menuNavbar.classList.remove('open')
}