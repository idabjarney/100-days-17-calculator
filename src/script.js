import './styles/styles.scss';

let displayNumber = document.querySelector('.number-input-value');
const inputHistoryEl = document.querySelector('.input-history');
const numberButtons = Array.from(document.querySelectorAll('.number'));
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.divide-btn');
const equalsBtn = document.querySelector('.equals-btn');
const clearBtn = document.querySelector('.clear-btn');
const eraseBtn = document.querySelector('.erase-btn');
const decimalBtn = document.querySelector('.decimal-btn');
const operators = document.querySelectorAll('.operator');

let storedNumber = '';
let inputHistory = [];
let storedNumberArr = [];
let operator = '';


defaultState();

// event listeners -----------------------------------------

operators.forEach((button, index) => {
  const operatorType = button.innerText;
  button.addEventListener('click', function() {
    switch(operatorType) {
      case '=':
        console.log('this is the equals operator');
        break;
      case '+':
        console.log('this is the + operator');
        break;
        case '-':
          console.log('this is the minus operator');
          break;
        case '×':
          console.log('this is the multiply operator');
          break;
        case '÷':
          console.log('this is the divide operator');
          break;
        case '±':
          console.log('this is the positive/negative operator');
          break;
        case '→':
          console.log('this is the erase number operator');
          break;
          
        default:
          throw new Error('no case for this operator', operatorType);
          break;
    }
  })
})


clearBtn.addEventListener('click', defaultState);

eraseBtn.addEventListener('click', function() {
  if (storedNumber > 1) {
    let slicedNumber = storedNumber.slice(0, -1);
    storedNumber = slicedNumber;
    displayNumber.textContent = slicedNumber;
  } else {
    let slicedNumber = storedNumber.slice(0, -1);
    storedNumber = slicedNumber;
    displayNumber.textContent = 0;
  }
});



// foreach loop --------------------------------------------

numberButtons.forEach((number, index) => {
  number.addEventListener('click', function() {
    const buttonNumber = number.textContent;
    storedNumber += buttonNumber;
    displayNumber.textContent = storedNumber;
  })
});

// functions -----------------------------------------------

// function calculate(operator, firstNumber, secondNumber) {
//   return firstNumber operator secondNumber;
// };

function pushToArr(storedNumber) {

  if (storedNumberArr.length < 2) {
    storedNumberArr.push(storedNumber);
  } else {
    storedNumberArr.shift();
    storedNumberArr.push(storedNumber);
  }
};


function defaultState() {
  inputHistoryEl.textContent = '';
  inputHistory = [];
  clearDisplayNumber(); 
};

function clearDisplayNumber() {
  displayNumber.textContent = 0;
  storedNumber = '';
};

function inputHistoryValue() {
  inputHistory.push(storedNumber);
  inputHistory.push('+');
  inputHistoryEl.textContent = inputHistory.join(' ');
  pushToArr(storedNumber);
  clearDisplayNumber();
};

// function minusOperator() {
//   inputHistory.push(storedNumber);
//   inputHistory.push('-');
//   inputHistoryEl.textContent = inputHistory.join(' ');
//   clearDisplayNumber();
// };

// function multiplyOperator() {
//   inputHistory.push(storedNumber);
//   inputHistory.push('×');
//   inputHistoryEl.textContent = inputHistory.join(' ');
//   clearDisplayNumber();
// };

// function divideOperator() {
//   inputHistory.push(storedNumber);
//   inputHistory.push('÷');
//   inputHistoryEl.textContent = inputHistory.join(' ');
//   clearDisplayNumber();
// };

// function equalsOperator() {
//   inputHistory.push(storedNumber);
//   inputHistory.push('=');
//   inputHistoryEl.textContent = inputHistory.join(' ');
//   clearDisplayNumber();
// };


