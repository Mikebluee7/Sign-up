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
    
    let operator = clickedOperator;
  
    if (currentOperandElement.textContent === '' && clickedOperator === '-') {
        currentOperandElement.textContent = '-';
        return;
    }

    if (mathSignElement.textContent !== '') {
        showResult();
    }

    previousOperandElement.innerHTML = currentOperandElement.innerHTML;
    mathSignElement.innerHTML = clickedOperator;
    currentOperandElement.innerHTML = '';
}

function clearScreen() {
    result = 0;
    currentOperandElement.textContent = '';
    previousOperandElement.textContent = '';
    mathSignElement.textContent = '';
}

function showResult() {
   

    if (previousOperandElement.textContent === '' || currentOperandElement.textContent === '') return;

    let a = Number(currentOperandElement.textContent);
    let b = Number(previousOperandElement.textContent);
    let operator = mathSignElement.textContent;

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
            result = b / a;
            break;
        case '2^':
            result = Math.pow(b, a);
            break;
        default:
            return;
    }

    result = Math.round(result * 10000) / 10000;


    currentOperandElement.textContent = result;
    previousOperandElement.textContent = '';
    mathSignElement.textContent = '';

}
console.log(result);
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});

operators.forEach((button) => button.addEventListener('click', operate))

clearBtn.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);

numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

