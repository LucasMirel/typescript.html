const studentName = document.getElementById('name') as 
HTMLInputElement;
const studentClass = document.getElementById('class') as 
HTMLInputElement;
const output = document.getElementById("output") as
HTMLElement;

function display(): void {
    if(output) {
        output.innerHTML = `My Name is ${studentName.value} from class ${studentClass.value}`;
    }
}


const output = document.getElementById("btn") as 
HTMLButtonElement;
button.addEventListener('click', display)

if (output) {
    output.inn
}