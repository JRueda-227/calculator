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
    if (b === 0) {
        alert ('Are you dumb?');
    }
    else {
        return a / b;
    }
}

function operate(a, b, operator) {
    const op1 = parseFloat(a);
    const op2 = parseFloat(b);
    let result;

    if (operator === '+') {
        result = add(op1, op2);
    }
    if (operator === '-') {
        result = subtract(op1, op2);
    }
    if (operator === 'x') {
        result = multiply(op1, op2);
    }
    if (operator === '/') {
        result = divide(op1, op2);
    }
    return result;
}

function del() {
    if (operandTwo !== '') {
        operandTwo = operandTwo.slice(0, -1);
        display(`${operandOne} ${operator} ${operandTwo}`);
    }
    if (operandTwo === '' && operator !== '') {
        operator = '';
        display(`${operandOne}`);
    }
    if (operandOne !== '') {
        operandOne = operandOne.slice(0, -1);
        display(`${operandOne}`);
    }
}

function clear() {
    displayContent.textContent = '';
    operandOne = '';
    operandTwo = '';
    operator = '';
}

function display(value) {
    displayContent.textContent = value;
}


const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

const displayContent = document.querySelector('.display');

let operandOne = '';
let operandTwo = '';
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.target.textContent

        if (operator === '') {
            operandOne += digit;
            display(operandOne);

            console.log(operandOne);
        }
        else {
            operandTwo += digit;
            display(`${operandOne} ${operator} ${operandTwo}`);

            console.log(operandTwo);
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (operandTwo !== '' && operator !== '') {
            operandOne = operate(operandOne, operandTwo, operator);
            operandTwo = '';
            operator = event.target.textContent;
            display(`${operandOne}`);
        }
        else {
            operator = event.target.textContent;
            display(`${operandOne} ${operator}`);
        }
    });
});

equalButton.addEventListener('click', () => {
    if (operandOne !== '' && operandTwo !== '' && operator !== '') {
        operandOne = operate(operandOne, operandTwo, operator);
        operandTwo = '';
        operator = '';
        display(operandOne);
    }
});

decimalButton.addEventListener('click', (event) => {
    const decimal = event.target.textContent;
    if (operandOne.includes(decimal)) {
        return;
    }
    operandOne += decimal;
    display(operandOne);
});

deleteButton.addEventListener('click', () => {
    del();
})

clearButton.addEventListener('click', clear);