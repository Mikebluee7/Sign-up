let previousOperand = document.querySelector('.previous-operand');
let currentOperand = document.querySelector('.current-operand');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const operatorButton = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');
const mathSign = document.querySelector('.mathSign');
let re = 0;

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

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    
    previousOperand.innerHTML = currentOperand.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentOperand.innerHTML = '';
}

function clearScreen() {
    re = '';
    currentOperand.innerHTML = '';
    previousOperand.innerHTML = '';
    mathSign.innerHTML = '';
}

function showResult() {
    if (previousOperand.innerHTML === '' || currentOperand.innerHTML === '') return;

    const a = parseFloat(currentOperand.innerHTML);
    const b = parseFloat(previousOperand.innerHTML);
    const operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = b + a;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = b * a;
            break;
        case ':':
            if (a === 0) {
                result = 'Error';
            } else {
                result = b / a;
            }
            break;
        case '2^':
            result = Math.pow(b, a);
            break;
    }

    if (re === 'Error') {
        currentOperand.innerHTML = re;
    } else {
        currentOperand.innerHTML = re.toString();
    }

    previousOperand.innerHTML = '';
    mathSign.innerHTML = '';
}


operatorButton.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});

operators.forEach((operator) => {
    operator.addEventListener('click', operate);
});

clearBtn.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);
