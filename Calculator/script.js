let previousOperand = document.querySelector('.previousOperand');
let currentOperand = document.querySelector('.currentOperand');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equal');
const mathSignElement = document.querySelector('.mathSign');
let result = '';
let operator = '';

function displayNumbers() {
    if (mathSignElement.innerHTML !== '') {
        currentOperand.innerHTML = '';
        mathSignElement.innerHTML = '';
    }

    if (this.textContent === '.' && !currentOperand.innerHTML.includes('.')) {
        currentOperand.innerHTML += this.textContent;
    } else if (this.textContent !== '.') {
        currentOperand.innerHTML += this.textContent;
    }
}



function operate() {
    if (currentOperand.innerHTML === '' && this.textContent === '-') {
        currentOperand.innerHTML = '-';
        return;
    } else if (currentOperand.innerHTML === '') {
        return;
    }

    if (mathSignElement.innerHTML !== '') {
        showResult();
    }

    operator = this.textContent;
    mathSignElement.innerHTML = operator; 
    console.log('Set operator:', operator);

    previousOperand.innerHTML = currentOperand.innerHTML;

    currentOperand.innerHTML = '';
}


function showResult() {
    

    if (previousOperand.innerHTML === '' || currentOperand.innerHTML === '') return;


    let a = Number(currentOperand.innerHTML);
    let b = Number(previousOperand.innerHTML);
    


    switch(operator){
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
        case '2^':
        result = b ** a;
        break;
    }


 

    currentOperand.innerHTML = result;

    previousOperand.innerHTML = '';
    mathSignElement.innerHTML = '';

    

}

function clearScreen() {
    result = '';
    currentOperand.innerHTML = '';
    previousOperand.innerHTML = '';
    mathSignElement.innerHTML = '';
    operator = ''; 
}


operators.forEach((button) => button.addEventListener('click', operate));


clearBtn.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);

numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

