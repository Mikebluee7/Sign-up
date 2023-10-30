let previousOperand = document.querySelector('.previous-operand'); 
let currentOperand = document.querySelector('.current-operand'); 
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator'); 
const operatorButton = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');
const mathSign = document.querySelector('.mathSign');

function displayNumbers() {
    if (this.textContent === '.' && currentOperand.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentOperand.innerHTML === '') return currentOperand.innerHTML = '0.';

    currentOperand.innerHTML += this.textContent;
}

function operate() {
    if (currentOperand.innerHTML === '' && this.textContent === '-') {
        currentOperand.innerHTML = '-';
        return;
    }

    const operator = this.textContent;
    const current = parseFloat(currentOperand.innerHTML);
    const previous = parseFloat(previousOperand.innerHTML);

    let result;
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = previous / current;
            }
            break;
        default:
            result = current;
    }

    previousOperand.innerHTML = result;
    currentOperand.innerHTML = '';
}

function clearScreen() {
    previousOperand.innerHTML = '0';
    currentOperand.innerHTML = '0';
    result = '';
}

function showResult() {
    const res = operate();
    
}

operatorButton.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});

operators.forEach((operator) => {
    operator.addEventListener('click', operate);
});

clear.addEventListener('click', clearScreen);
equalButton.addEventListener('click', showResult);
