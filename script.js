/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/
var menuIcon1 = document.querySelector('#menu-icon');
var navbar1 = document.querySelector('.navbar');

menuIcon1.onclick = () => {
  menuIcon1.classList.toggle('bx-x'); // icon change
  navbar1.classList.toggle('active'); // menu show/hide
};

// scroll korle menu close hobe
window.onscroll = () => {
  menuIcon1.classList.remove('bx-x');
  navbar1.classList.remove('active');
}


/*==================== typed js ====================*/
var typed = new Typed(".typing", {
      strings: ["Full Stack Developer", "MERN Stack Developer", "Open Source Contributor"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    });