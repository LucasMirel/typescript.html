"use strict";
const studentName = document.getElementById('name');
const studentClass = document.getElementById('class');
const output = document.getElementById("output");
function display() {
    if (output) {
        output.innerHTML = `My Name is ${studentName.value} from class ${studentClass.value}`;
    }
}
const button = document.getElementById("btn");
button.addEventListener('click', display);

