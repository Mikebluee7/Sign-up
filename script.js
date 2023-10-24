const previousOperand = document.querySelector('.previous-operand'); 
const currentOperand = document.querySelector('.current-operand'); 
const clear = document.querySelector('.span-two');
const operators = document.querySelectorAll('.operator'); 
const operatorButton = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');
const mathSign = document.querySelector('.mathSign');
let result = '';

function displayNumbers() {
    if(this.textContent === '.' && currentOperand.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentOperand.innerHTML === '') return currentOperand.innerHTML = '.0'

    currentOperand.innerHTML += this.textContent;
}

function operate {
    if(currentOperand.innerHTML === '' && this.textContent === '-'){
        currentOperand.innerHTML = '-';
        return;
    }
}


function clearScreen {

}


function showResult {

}











operatorButton.forEach((button) =>{
    button.addEventListener('click', displayNumbers)
})

operators.forEach(operator => operator.addEventListener('click', operate));

clear.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);
