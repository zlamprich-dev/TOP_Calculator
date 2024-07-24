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

let buttonsDiv = document.querySelector('.operatorButtons')

buttonsDiv.appendChild(add)
buttonsDiv.appendChild(subtract)
buttonsDiv.appendChild(divide)
buttonsDiv.appendChild(multiply)



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

