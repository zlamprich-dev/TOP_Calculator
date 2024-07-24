let add = document.createElement('button')
add.innerText = 'Add (+)'
add.addEventListener('click', addValues)

let subtract = document.createElement('button')
subtract.innerText = 'Subtract (-)'
subtract.addEventListener('click', subtractValues)

let divide = document.createElement('button')
divide.innerText = 'Divide (/)'
divide.addEventListener('click', divideValues)

let multiply = document.createElement('button')
multiply.innerText = 'Multiply (*)'
multiply.addEventListener('click', multiplyValues)

let display = document.querySelector('.display')
let opButtonsDiv = document.querySelector('.operatorButtons')
let buttonsDiv = document.querySelector('.numberButtons')

opButtonsDiv.appendChild(add)
opButtonsDiv.appendChild(subtract)
opButtonsDiv.appendChild(divide)
opButtonsDiv.appendChild(multiply)


let numberBtnInt;
let int1;
let int2;



function addValues() {
    let int1 = parseInt(prompt("Please enter your first value"))
    let int2 = parseInt(prompt("Please enter your second value"))
    return console.log(int1 + int2)
}

function subtractValues() {
    let int1 = parseInt(prompt("Please enter your first value"))
    let int2 = parseInt(prompt("Please enter your second value"))
    return console.log(int1 - int2)
}

function divideValues() {
    let int1 = parseInt(prompt("Please enter your first value"))
    let int2 = parseInt(prompt("Please enter your second value"))
    return console.log(int1 / int2)
}

function multiplyValues() {
    let int1 = parseInt(prompt("Please enter your first value"))
    let int2 = parseInt(prompt("Please enter your second value"))
    return console.log(int1 * int2)
}

function createNumberButtons() {
    let i = 0;
    let clear = document.createElement('button')
    for (i; i <= 9; i++) {
        let btn = document.createElement('button')
        btn.innerText = `${i}`
        btn.id = `${i}`
        buttonsDiv.append(btn)
        btn.style.fontSize = 'larger'
    }
    clear.innerText = 'Clear'
    buttonsDiv.append(clear)
    clear.style.fontSize = 'larger'

}


createNumberButtons()
btn.addEventListener('click', () => {
    let integerOutput;
    
})