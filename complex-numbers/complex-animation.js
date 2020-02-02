const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider-5');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
const logo = document.querySelector('.main-nav-item-1');
const listheader = document.querySelector('.list-header');

const tl=new TimelineLite();

tl.fromTo(slider, 1.2, {x: "-100%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(logo, 0.5, {opacity:0, x:150}, {opacity:1, x:0}, "-=1.2")
.fromTo(listheader, 1.5, {x: "-100%"}, {x:"0%", ease: Power2.easeInOut},"-=1.2")

