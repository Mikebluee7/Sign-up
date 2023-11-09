let previousOperandElement = document.querySelector('.previousOperand');
let currentOperandElement = document.querySelector('.currentOperand');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');
const mathSignElement = document.querySelector('.mathSign');
let result = 0;

function displayNumbers() {
    const clickedButtonValue = this.textContent;
    const currentOperandText = currentOperandElement.textContent;

    if (clickedButtonValue === '.' && currentOperandText.includes('.')) return;
    if (clickedButtonValue === '.' && currentOperandText === '') return currentOperandElement.textContent = '0.';

    currentOperandElement.textContent += clickedButtonValue;
}

function operate() {
    const clickedOperator = this.textContent;

    if (!currentOperandElement || !previousOperandElement || !mathSignElement) {
        console.error('One or more elements not found.');
        return;
    }

    if (currentOperandElement.textContent === '' && clickedOperator === '-') {
        currentOperandElement.textContent = '-';
        return;
    }

    if (mathSignElement !== '') {
        showResult();
    }

    previousOperandElement.textContent = currentOperandElement.textContent;
    operator = clickedOperator;
    mathSignElement.textContent = operator;
    currentOperandElement.textContent = '';
}

function clearScreen() {
    result = 0;
    currentOperandElement.textContent = '';
    previousOperandElement.textContent = '';
    mathSignElement.textContent = '';
}

function showResult() {
    const previousOperandValue = parseFloat(previousOperandElement.textContent);
    const currentOperandValue = parseFloat(currentOperandElement.textContent);

    if (isNaN(previousOperandValue) || isNaN(currentOperandValue)) return;

    switch (operators) {
        case '+':
            result = previousOperandValue + currentOperandValue;
            break;
        case '-':
            result = previousOperandValue - currentOperandValue;
            break;
        case '*':
            result = previousOperandValue * currentOperandValue;
            break;
        case '/':
            if (currentOperandValue !== 0) {
                result = previousOperandValue / currentOperandValue;
            } else {
                alert("Nie można dzielić przez zero!");
                clearScreen();
                return;
            }
            break;
        default:
            return;
    }


    result = Math.round(result * 10000) / 10000;

    currentOperandElement.textContent = result;
    previousOperandElement.textContent = '';
    mathSignElement.textContent = '';
}

numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});

operators.forEach((operator) => {
    operator.addEventListener('click', operate);
});

clearBtn.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);
