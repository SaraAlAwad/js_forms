
console.log('test')
let number = document.getElementById("number");
let result = document.getElementById("result");

function doubleTheNumber() {
    let dnumber = number.value * 2;
    result.innerHTML = dnumber;
}
// ++++ Aufgabe Lev1_2 js-function-your-ag3 ++++
let year = document.getElementById("year");
let result02 = document.getElementById("result02");
function yourAge() {
    let userAge = 2022 - year.value;
    result02.innerHTML = userAge
}
// ++++ Aufgabe Lev1_3  js-fuction-compare-age
let age1 = document.getElementById("age1");
let age2 = document.getElementById("age2");
let result03 = document.getElementById("result03");
function diff() {
    let diff = age1.value - age2.value;
    result03.innerHTML = diff;
}