'use strict';

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
const controlButtons = document.querySelectorAll('.control-button');
const operatorSymbols = ['%', '×', '÷', '-', '+', '='];

let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

const calculate = function() {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  switch(symbol) {
    case '=':
      result = firstValue;
      displayNumber.innerText = result;
      break;
    case '+': 
      result = firstValue + secondValue;
      displayNumber.innerText = result;
      break;
      case '-':
        result = firstValue - secondValue;
        displayNumber.innerText = result;
        break;
      case '×':
        result = firstValue * secondValue;
        displayNumber.innerText = result;
        break;
      case '÷':
        result = firstValue / secondValue;
        displayNumber.innerText = result;
        break;
      case '%':
        result = firstValue % secondValue;
        displayNumber.innerText = result;
        break;
      default:
        throw new Error('no case for this operator', operatorType);
        break;
  }

  displayNumber.innerText = result;
  firstValue = result;
  secondValue = '';
}

controlButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const btnValue = button.innerText;
    const isOperator = operatorSymbols.includes(btnValue);
    const isMinus = operatorSymbols.includes('-');

    // if (!secondValue && btnValue !== '-') return;
    if (btnValue === 'C') {
      firstValue = '';
      secondValue = '';
      symbol = '';
      result = '';
      return displayNumber.innerText = '';
    }

    if (firstValue && isOperator) {
      if (secondValue) {
        calculate();
      };
      symbol = btnValue;
    } else if (!symbol) {
      firstValue += btnValue;
    } else if (symbol) {
      secondValue += btnValue;
    }

    if (btnValue !== '=') {
      displayNumber.innerText += btnValue;
    }
    console.log({firstValue, secondValue})

    if (btnValue === 'DEL') {
      backspace();
      console.log('used backspace')
    }
  });
});


function backspace() {
  let slicedNumber = firstValue.slice(0, -1);
  firstValue = slicedNumber;
  displayNumber.textContent = firstValue;

  // if (firstValue > 1 && secondValue === '') {
  //   let slicedNumber = firstValue.slice(0, -1);
  //   firstValue = slicedNumber;
  //   displayNumber.textContent = slicedNumber;
  // }
  
  // if (secondValue > 1) {
  //   let slicedNumber = secondValue.slice(0, -1);
  //   secondValue = slicedNumber;
  //   displayNumber.textContent = slicedNumber;
  // }
}

// function defaultState() {
//   firstValue = '';
//   secondValue = '';
//   symbol = '';
//   result = '';
//   return displayNumber.innerText = '';
// }


// let storedNumber = '';
// let inputHistory = [];
// let storedNumberArr = [];
// let previousNumber = storedNumberArr[storedNumberArr.length - 2];
// let currentNumber = storedNumberArr[storedNumberArr.length - 2];

// // console.log({previousNumber, currentNumber});
// console.log(storedNumberArr);


// defaultState();

// // event listeners -----------------------------------------

// operators.forEach((button, index) => {
//   const operatorType = button.innerText;
//   button.addEventListener('click', function() {

//     switch(operatorType) {
//       case '=':
//         console.log('this is the equals operator');
//         break;
//       case '+': 
//         storedNumberArr.push(storedNumber);
//         const answer = +previousNumber + +currentNumber;
//         console.log({previousNumber, currentNumber, answer});
//         break;
//         case '-':
//           console.log('this is the minus operator');
//           break;
//         case '×':
//           console.log('this is the multiply operator');
//           break;
//         case '÷':
//           console.log('this is the divide operator');
//           break;
//         case '±':
//           console.log('this is the positive/negative operator');
//           break;
//         case '→':
//           console.log('this is the erase number operator');
//           break;
          
//         default:
//           throw new Error('no case for this operator', operatorType);
//           break;
//     }
//   })
// })


// clearBtn.addEventListener('click', defaultState);

// eraseBtn.addEventListener('click', function() {
//   if (storedNumber > 1) {
//     let slicedNumber = storedNumber.slice(0, -1);
//     storedNumber = slicedNumber;
//     displayNumber.textContent = slicedNumber;
//   } else {
//     let slicedNumber = storedNumber.slice(0, -1);
//     storedNumber = slicedNumber;
//     displayNumber.textContent = 0;
//   }
// });

// function deleteNumber() {
//   if (firstValue.length > 1) {
//     let slicedNumber = storedNumber.slice(0, -1);
//     storedNumber = slicedNumber;
//     displayNumber.textContent = slicedNumber;
//   } else {
//     let slicedNumber = storedNumber.slice(0, -1);
//     storedNumber = slicedNumber;
//     displayNumber.textContent = 0;
//   }
// };



// // foreach loop --------------------------------------------

// numberButtons.forEach((number, index) => {
//   number.addEventListener('click', function() {
//     const buttonNumber = number.textContent;
//     storedNumber += buttonNumber;
//     displayNumber.textContent = storedNumber;
//   })
// });

// // functions -----------------------------------------------


// function pushToArr(storedNumber) {
//   storedNumberArr.push(storedNumber);
// };


// function defaultState() {
//   inputHistoryEl.textContent = '';
//   inputHistory = [];
//   clearDisplayNumber(); 
// };

// function clearDisplayNumber() {
//   displayNumber.textContent = 0;
//   storedNumber = '';
// };

// function inputHistoryValue() {
//   inputHistory.push(storedNumber);
//   inputHistory.push('+');
//   inputHistoryEl.textContent = inputHistory.join(' ');
//   pushToArr(storedNumber);
//   clearDisplayNumber();
// };
