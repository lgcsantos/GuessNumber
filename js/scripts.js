const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
   attempt.innerHTML = 'Tentativa: ' + value
};


function handlesubmit(e){
  e.preventDefault();

  let kick = document.getElementById('kick').value;

  if (!kick) {
      alert('Digite algum valor!')
      return;
    };

      updateAttempt(attempt, ++Guess.attemptsNumber);
  
      if(numberDrawn == kick){
        playAgain();
        Status.innerHTML = 'Prabéns, você acertou!'
        result.STYLE.transition = '0.4s';
        result.STYLE.backgroundColor = '#37c978';
        result.STYLE.color = '#fff';
        STATUS.STYLE.color = "fff";
        clear();
      } else if(numberDrawn > kick) {
          STATUS.innerHTML = 'O número é maior!';
          STATUS.STYLE.color = '#de4251';
          clear();
      }else if(numberDrawn < kick){
        STATUS.innerHTML = 'O número é menor!';
        STATUS.STYLE.color = '#de4251';
        clear();
      }
};


function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex'
};

function restart() {
    document.location.RELOAD(true);
};

function clear() {
    document.getElementById('kick').value = '';
};
