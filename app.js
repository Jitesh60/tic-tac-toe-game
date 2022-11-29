let counter = 0;
let symbol;

function TicTacToe(event) {
  const button = event.target;
  counter++;

  if (counter % 2) {
    symbol = "X";
    button.innerHTML = `<div class="text-3xl text-white font-bold">${symbol}</div>`
  } else {
    symbol = "O";
    button.innerHTML = `<div class="text-3xl text-white font-bold">${symbol}</div>`
  }


  button.disabled = true;

  if(GameStart()===1){
  }

}

function GameStart() {
  

  const buttonOne = document.getElementById('button-one').innerHTML;
  const buttonTwo = document.getElementById('button-two').innerHTML;
  const buttonThree = document.getElementById('button-three').innerHTML;
  const buttonFour = document.getElementById('button-four').innerHTML;
  const buttonFive = document.getElementById('button-five').innerHTML;
  const buttonSix = document.getElementById('button-six').innerHTML;
  const buttonSeven = document.getElementById('button-seven').innerHTML;
  const buttonEight = document.getElementById('button-eight').innerHTML;
  const buttonNine = document.getElementById('button-nine').innerHTML;

  const Declared = document.getElementById('declared');

  if(((buttonOne === buttonTwo && buttonTwo === buttonThree && buttonOne !== '') || (buttonOne === buttonFour && buttonOne === buttonSeven && buttonOne !== '') || (buttonOne === buttonFive && buttonOne === buttonNine && buttonOne !== '') || (buttonThree === buttonSix && buttonThree === buttonNine && buttonThree !== '') || (buttonThree === buttonFive && buttonThree === buttonSeven && buttonThree !== '') || (buttonFour === buttonFive && buttonFour === buttonSix && buttonFour !== '') || (buttonSeven === buttonEight && buttonSeven === buttonNine && buttonSeven !== '') || (buttonTwo === buttonFive && buttonTwo === buttonEight && buttonTwo != '')) && counter !==1) {
    if (counter % 2) {
      symbol = "X"
            console.log('its working');
      Declared.innerHTML = `<div class="text-white text-3xl font-bold"> player ${symbol} win</div>`
    return 1;
    }  else {
      symbol = "O"
      Declared.innerHTML = `<div class="text-white text-3xl font-bold">player ${symbol} win</div>`
      return 1;
    }
  }
  if(buttonOne !=='' && buttonTwo !=='' && buttonThree !=='' && buttonFour !=='' && buttonFive !=='' && buttonSix !=='' && buttonSeven !=='' && buttonEight !=='' && buttonNine !==''){
    Declared.innerHTML = `<div class="text-white text-3xl font-bold">Draw</div>`
  }
  buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
    buttonSeven.disabled = true;
    buttonEight.disabled = true;
    buttonNine.disabled = true;
}



