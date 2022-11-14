import './styles/styles.scss';

const displayNumber = document.querySelector('.number-input');
const inputHistory = document.querySelector('.input-history');
const numberButtons = Array.from(document.querySelectorAll('.number'));
const plusBtn = document.querySelector('.plus-btn');

numberButtons.forEach((number, index) => {
  number.addEventListener('click', function() {
    console.log(number, index)
  })
});


function plusOperator() {
  let number = numberButtons.value;
  
}

