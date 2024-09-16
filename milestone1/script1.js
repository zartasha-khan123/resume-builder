"use strict";
// buttons 
let skills12 = document.getElementById('skillbtn');
let education12 = document.getElementById('educationbtn');
let experience12 = document.getElementById('experiencebtn');
// sections
let skillssec1 = document.getElementById('skills');
let edu1 = document.getElementById('education');
let exp1 = document.getElementById('experience');
//conditions
skills12.addEventListener("click", () => {
    if (skillssec1.style.display === 'block') {
        skillssec1.style.display = 'none';
    }
    else {
        skillssec1.style.display = 'block';
    }
});
education12.addEventListener('click', () => {
    if (edu1.style.display === 'block') {
        edu1.style.display = 'none';
    }
    else {
        edu1.style.display = 'block';
    }
});
experience12.addEventListener('click', () => {
    if (exp1.style.display === 'block') {
        exp1.style.display = 'none';
    }
    else {
        exp1.style.display = 'block';
    }
});
