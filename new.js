"use strict";
const nama = "Ihsan";
function display() {
    alert('This is display function');
}
const output = document.getElementById("output");
if (output) {
    output.innerHTML = `halo, ${nama}`;
}
