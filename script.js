const previousOperand = document.querySelector('.previous-operand'); 
const currentOperand = document.querySelector('.current-operand'); 
const spanTwo = document.querySelector('.span-two');
const operators = document.querySelectorAll('.operator'); 

let result = '';




















operators.forEach(operator => operator.addEventListener('click', operate));

spanTwo.addEventListener('click', clearScreen);

