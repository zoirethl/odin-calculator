const currentInput = document.getElementById('input-result');
let storedValue = 0;
let currentOperation = '';
let decimalAdded = false;

function playSound(audioSrc) {
    var sound = new Audio(audioSrc);
    sound.play();
}

function addNumber(number) { //writes the number o the button clicked
    currentInput.value += number;
    decimalAdded = false;
    playSound("./Assets/mixkit-interface-click-1126.wav");
}

function addOperation(operation) { //writes the operator o the button clicked
    storedValue = parseFloat(currentInput.value); //Stores the actual value of input in storedValue, and makes sure it's a number
    currentInput.value = ''; //Clears the content of the input to type a new number
    currentOperation = operation; 
    decimalAdded = false;
    playSound("./Assets/mixkit-interface-click-1126.wav");
}

function equals (){
    if (currentOperation === '+') {
        storedValue = add(storedValue, parseFloat(currentInput.value));
    } else if (currentOperation === '-') {
        storedValue = subtract(storedValue, parseFloat(currentInput.value));
    } else if (currentOperation === '*') {
        storedValue = multiply(storedValue, parseFloat(currentInput.value));
    } else if (currentOperation === '/') {
        storedValue = divide(storedValue, parseFloat(currentInput.value));
    } else if (currentOperation === '=') {
        currentInput.value = storedValue;
    }
    currentInput.value = storedValue;
    currentOperation = '';
    decimalAdded = currentInput.value.includes('.');
    playSound("./Assets/mixkit-pebbles-click-1128.wav");
}

const add = function(numA, numB) {
	let res = numA + numB;
  return res;
};

const subtract = function(numA, numB) {
	let res = numA - numB;
  return res;
};

const multiply = function(numA, numB) {
    let res = numA * numB;
  return res;
};

const divide = function(numA, numB) {
    let res = numA / numB;
  return res;
};

//Function that resets and clears all the values
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clear);

function clear() {
    console.log('Clearing...');
    currentInput.value = '';
    storedValue = 0;
    currentOperation = '';
}