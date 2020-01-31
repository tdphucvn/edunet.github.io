const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
const logo = document.querySelector('.main-nav-item-1');
const headline = document.querySelector('.headline');

const tl=new TimelineLite();

tl.fromTo(hero,1,{height:"0%"},{height:'100%', ease: Power2.easeInOut}
).fromTo(hero, 1.2, {width:'100%'},{width:'80%', ease: Power2.easeInOut}
).fromTo(slider, 1.2, {x: "-100%"}, {x:"0%", ease: Power2.easeInOut},"-=1.2")
.fromTo(logo, 0.5, {opacity:0, x:150}, {opacity:1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity:0, x:150}, {opacity:1, x:0}, "-=0.5")

