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

let storedNumber = '';
let inputHistory = [];
let storedNumberArr = [];

console.log(storedNumberArr)

defaultState();

// event listeners -----------------------------------------

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

plusBtn.addEventListener('click', plusOperator);
minusBtn.addEventListener('click', minusOperator);
multiplyBtn.addEventListener('click', multiplyOperator);
divideBtn.addEventListener('click', divideOperator);
equalsBtn.addEventListener('click', equalsOperator);

// foreach loop --------------------------------------------

numberButtons.forEach((number, index) => {
  number.addEventListener('click', function() {
    const buttonNumber = number.textContent;
    storedNumber += buttonNumber;
    displayNumber.textContent = storedNumber;
  })
});

// functions -----------------------------------------------



function pushToArr(storedNumber) {
  storedNumberArr.push(storedNumber);
  // if(storedNumber.length < 2) {
  //   storedNumberArr.push(storedNumber);
  // } else {
  //   storedNumberArr.shift();
  //   storedNumberArr.push(storedNumber);
  // }
}

function defaultState() {
  inputHistoryEl.textContent = '';
  clearDisplayNumber();
};

function clearDisplayNumber() {
  displayNumber.textContent = 0;
  storedNumber = '';
};

function plusOperator() {
  inputHistory.push(storedNumber);
  inputHistory.push('+');
  inputHistoryEl.textContent = inputHistory.join(' ');
  clearDisplayNumber();
  storedNumberArr.push(storedNumber);
};

function minusOperator() {
  inputHistory.push(storedNumber);
  inputHistory.push('-');
  inputHistoryEl.textContent = inputHistory.join(' ');
  clearDisplayNumber();
};

function multiplyOperator() {
  inputHistory.push(storedNumber);
  inputHistory.push('×');
  inputHistoryEl.textContent = inputHistory.join(' ');
  clearDisplayNumber();
};

function divideOperator() {
  inputHistory.push(storedNumber);
  inputHistory.push('÷');
  inputHistoryEl.textContent = inputHistory.join(' ');
  clearDisplayNumber();
};

function equalsOperator() {
  inputHistory.push(storedNumber);
  inputHistory.push('=');
  inputHistoryEl.textContent = inputHistory.join(' ');
  clearDisplayNumber();
};


