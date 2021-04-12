document.addEventListener("DOMContentLoaded", (e) => {
  const resultOutput = document.getElementById('result'); 
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const firstInput = document.getElementById('first-number'); 
    const secondInput = document.getElementById('second-number'); 
    const firstOperand = +firstInput.value;
    const secondOperand = +secondInput.value;
    const operatorInput = document.getElementById('operator'); 
    const operator = operatorInput.selectedOptions[0].textContent;

    e.preventDefault()
    resultOutput.textContent = processResults(firstOperand, secondOperand, operator).toFixed(1)
  });

function processResults(first, second, operator) {
  switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '/':
        return first / second;
      case '*':
        return first * second;
  }
}
});