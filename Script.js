// Remember to console log test each function

// Global variables - to link HTML elements
const button = document.querySelectorAll('button'); // Selects all HTML button elements
const display = document.querySelector('.number-on-screen'); // Selects specifically the number-on-screen class elements

// Global variables - empty string elements that can be filled in later
let numberStored = ''; // To store numbers
let operatorStored = ''; // To store operator signs

// Global variables - Javascript booleans
// Everything with a value is true, everything without a variable is false
let newInput = false;
let didEquals = false;

// Function to assign our calculations to numberStored variable
function storeCalc (operator) {
    if (!numberStored) {
        numberStore = display.textContent;
    } else {
        numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent));
    };

    operatorStored = operator;
    newInput = true;
    didEquals = false;
};

// Calculations - Parent Function
function operate (a, operate, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        return null
    }
};

console.log(operate,(10, '/', 2));

