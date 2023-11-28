let birds = document.getElementById('birds');
let sun = document.getElementById('sun');
let hill2 = document.getElementById('hill2');
let hill1 = document.getElementById('hill1');
let welcome = document.querySelector('.welcome');
let limit = 620;

window.onscroll = function() {
    let value = Math.min(scrollY, limit);
    window.scrollTo(0, value);
    birds.style.right = value*2.5 + 'px';
    sun.style.bottom = value *5 + 'px';
    hill2.style.top = value *1.5 + 'px';
    hill1.style.top = value * 1.43 + 'px';
}
