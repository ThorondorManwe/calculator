/* Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

    add
    subtract
    multiply
    divide */
function add(num1, num2) {
  const suma = num1 + num2;
  return suma;
}

function subtract(num1, num2) {
  const resta = num1 - num2;
  return resta;
}

function multiply(num1, num2) {
  const multi = num1 * num2;
  return multi;
}

function divide(num1, num2) {
  const division = num1 / num2;
  return division;
}

/* Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers. */
function operate(operator, num1, num2) {
  let resultado = 0;
  if(operator === '+') {
    resultado = add(num1, num2);
  }else if (operator === '-') {
    resultado = subtract(num1, num2);
  }else if (operator === 'X') {
    resultado = multiply(num1, num2);
  }else if (operator === '/') {
    resultado = divide(num1, num2);
  }
  display.textContent = resultado;
}

/* Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

    Do not worry about wiring up the JS just yet.
    There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
    Add a “clear” button. */


// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.
let displayValue = '';
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

const display = document.querySelector('.display');

function populateDisplay(value) {
  display.textContent += value;
  displayValue = display.textContent;
}

/* Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, 
    and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
    This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. 
    Don’t feel bad if it takes you a while to figure out the logic.
*/
const buttons = document.querySelectorAll('button');

// Escuchar todos los botones
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // En la escucha separar cuando se trate de un boton de operator
    if (button.classList.contains('btn-operator')) {
      display.textContent = '';
      firstNumber = parseFloat(displayValue);
      operator = button.id;
      console.log(operator);
      console.log(displayValue);
      console.log(firstNumber);
    }else if (button.classList.contains('btn-equals')) { // Separar cuando se trate de un boton de igual
      secondNumber = parseFloat(displayValue);
      console.log(displayValue);
      console.log(secondNumber);
      console.log('Es el botón de igual');
      operate(operator, firstNumber, secondNumber);
    }else if (button.classList.contains('btn-clear')) {  // Separar cuando se trate de un boton de C limpiar la pantalla
      display.textContent = '';
      console.log('Es el boton de clear');
    }else if (button.classList.contains('btn-number')) { // Separar cuando se trate de un número
      console.log('Es un número');
      let selection = button.id;
      populateDisplay(selection);
    }

  });
});