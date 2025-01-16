function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') {
        add(a, b);
    }
    if (operator === '-') {
        subtract(a, b);
    }
    if (operator === 'x') {
        multiply(a, b);
    }
    if (operator === '/') {
        divide(a, b);
    }
}

function clear() {
    displayContent.textContent = '';
}

function display(n) {
    displayContent.textContent += n;
}


const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear')

const displayContent = document.querySelector('.display');

clearButton.addEventListener('click', clear);

numberButton.forEach(button => {
    button.addEventListener('click', (event) => {
        numOne = event.target.textContent;
        display(numOne);
    });
});

operatorButton.forEach(button => {
    button.addEventListener('click', (event) => {
        operator = event.target.textContent;
        display(operator);
    })
})