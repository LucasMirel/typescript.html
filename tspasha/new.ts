const nama : string = "Ihsan Dari kelas 10"
const studentName = document.getElementById('name') as HTMLInputElement;
const studentClass = document.getElementById('class') as HTMLInputElement;

function display() {
    alert('This is display function')
}

function display2() {
    alert('Now that you know you dont have to press the other one ')
}


const output = document.getElementById("btn") as 
HTMLButtonElement;
button.addEventListener('click', display)

const output = document.getElementById("output");

if(output) {
    output.innerHTML = `halo, ${nama}`;
}