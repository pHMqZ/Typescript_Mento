"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somar(a, b) {
    return a + b;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somar(Number(input1.value), Number(input2.value)));
        }
    });
}
