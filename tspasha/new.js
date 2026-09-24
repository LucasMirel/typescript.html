"use strict";
const nama = "Ihsan Dari kelas 10";
const studentName = document.getElementById('name');
const studentClass = document.getElementById('class');
function display() {
    alert('This is display function');
}
function display2() {
    alert('Now that you know you dont have to press the other one ');
}
const button = document.getElementById("btn");
button.addEventListener('click', display);
const output = document.getElementById("output");
if (output) {
    output.innerHTML = `halo, ${nama}`;
}
