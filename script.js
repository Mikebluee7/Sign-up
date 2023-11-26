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
    }

    if (this.textContent === '.' && currentOperand.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentOperand.innerHTML === '') return currentOperand.innerHTML = '.0';

    currentOperand.innerHTML += this.textContent;
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

    console.log('currentOperand.innerHTML:', currentOperand.innerHTML);
    console.log('previousOperand.innerHTML:', previousOperand.innerHTML);

    let a = Number(currentOperand.innerHTML);
    let b = Number(previousOperand.innerHTML);
    

    console.log('a:', a);
    console.log('b:', b);
    console.log('operator:', operator);

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


    console.log('result:', result);

    currentOperand.innerHTML = result;

    previousOperand.innerHTML = '';
    mathSignElement.innerHTML = '';

    

}


function clearScreen () {
    result = '';
    currentOperand.innerHTML = '';
    previousOperand.innerHTML = '';
    mathSignElement.innerHTML = '';

}




operators.forEach((button) => button.addEventListener('click', function(){
    operate();
    console.log('Clicked operator button:', this.textContent);
}));

clearBtn.addEventListener('click', clearScreen);

equalButton.addEventListener('click', showResult);

numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

