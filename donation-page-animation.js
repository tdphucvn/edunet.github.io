const donate1 = document.querySelector('.donate-1');
const donate2 = document.querySelector('.donate-2');
const donate3 = document.querySelector('.donate-3');
const slider = document.querySelector('.slider-4');
const logo = document.querySelector('.main-nav-item-1');

const tl=new TimelineLite();

tl.fromTo(slider, 1.2, {x: "-100%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(logo, 0.5, {opacity:0, x:150}, {opacity:1, x:0}, "-=0.5")
.fromTo(donate1, 1.5,{x: "120%"}, {x:"0%", ease: Power2.easeInOut}, "-=0.7")
.fromTo(donate2, 1.5,{x: "120%"}, {x:"0%", ease: Power2.easeInOut}, "-=0.9")
.fromTo(donate3, 1.5,{x: "120%"}, {x:"0%", ease: Power2.easeInOut}, "-=0.9")