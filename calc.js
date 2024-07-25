let display = document.querySelector('.display');
let opButtonsDiv = document.querySelector('.operatorButtons');
let buttonsDiv = document.querySelector('.numberButtons');

let currentInput = "";

let equalsBtn = document.createElement('button')
equalsBtn.innerText = 'Equals (=)'
equalsBtn.addEventListener('click', evalInput)
opButtonsDiv.appendChild(equalsBtn)

// Function to update display
function updateDisplay() {
    display.innerText = currentInput;
    console.log(currentInput)
}

function evalInput() {
    let result = eval(currentInput)
    currentInput = `${result}`
    updateDisplay();
}

// Function to clear display
function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

// Create operator buttons
let operators = [
    { text: 'Add (+)', id: 'add', func: () => currentInput += '+' },
    { text: 'Subtract (-)', id: 'subtract', func: () => currentInput += '-' },
    { text: 'Divide (/)', id: 'divide', func: () => currentInput += '/' },
    { text: 'Multiply (*)', id: 'multiply', func: () => currentInput += '*' }
];

operators.forEach(op => {
    let button = document.createElement('button');
    button.innerText = op.text;
    button.addEventListener('click', () => {
        op.func();
        updateDisplay();
    });
    opButtonsDiv.appendChild(button);
});

// Create number buttons
function createNumberButtons() {
    for (let i = 0; i <= 9; i++) {
        let btn = document.createElement('button');
        btn.innerText = `${i}`;
        btn.id = `${i}`;
        btn.addEventListener('click', () => {
            currentInput += i;
            updateDisplay();
        });
        buttonsDiv.appendChild(btn);
    }

    let clear = document.createElement('button');
    clear.innerText = 'Clear';
    clear.addEventListener('click', clearDisplay);
    buttonsDiv.appendChild(clear);
}



createNumberButtons();