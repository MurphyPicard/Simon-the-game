let computerChoices = [];//array of numbers
let userChoices = [];//array of numbers
let mostRecentChoice = [];

let startGameButton = document.getElementById('startButton');
let turnNumber = 0;
// let continueGame = false;

let greenButton = document.getElementById('greenButton');
let redButton = document.getElementById('redButton');
let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');
var randomNumber;
let roundNumber = 1;





startGameButton.addEventListener('click', computersFirstChoice);
//add initial number to computerChoices array

function computersFirstChoice(){
  roundNumber = 1;
  randomNumber = Math.floor((Math.random() * 4) + 1);
  computerChoices.push(randomNumber);
  highlight(randomNumber);
  //beep
}

function playersFirstChoice(){
  greenButton.addEventListener('click', greenFunction);
  redButton.addEventListener('click', redFunction);
  yellowButton.addEventListener('click', yellowFunction);
  blueButton.addEventListener('click', blueFunction);

}

function computersXChoice(){};

function playersXChoice(){};




//functions to push a number to users array
function greenFunction (){
  mostRecentChoice = 1;
  userChoices.push(mostRecentChoice);
}
function redFunction (){
  mostRecentChoice = 2;
  userChoices.push(mostRecentChoice);
}
function yellowFunction(){
  mostRecentChoice = 3;
  userChoices.push(mostRecentChoice);
}
function blueFunction(){
  mostRecentChoice = 4;
  userChoices.push(mostRecentChoice);
}


//function that compares arrays for equality
function decide (){
//input loop here lol I forgot it was a memory game
      if (userChoices[userChoices.length - 1] !== computerChoices[computerChoices.length - 1]){
        console.log(computerChoices, userChoices, "sorry");
      }//if
      else {
        console.log(computerChoices, userChoices, "yay");
      }//else
}//decidefunction

var intervalId = setInterval(function(){
  highlight();
}, 400);



//function that will highlight colors
function highlight (num){
  switch(num){
    case 1:

      greenButton.style.backgroundColor = "pink";
      break;
    case 2:
      redButton.style.backgroundColor = "pink";
      break;
    case 3:
      yellowButton.style.backgroundColor = "pink";
      break;
    case 4:
      blueButton.style.backgroundColor = "pink";
      break;
  }//switch
}//highlight function





// console.log(continueGame);

// let greenFunction = function (){
//   mostRecentChoice = 1;
//   userChoices.push(mostRecentChoice);
// };
// let redFunction = function (){
//   mostRecentChoice = 2;
//   userChoices.push(mostRecentChoice);
// };
// let yellowFunction = function (){
//   mostRecentChoice = 3;
//   userChoices.push(mostRecentChoice);
// };
// let blueFunction = function (){
//   mostRecentChoice = 4;
//   userChoices.push(mostRecentChoice);
// };
// greenButton.addEventListener('click', greenFunction);
// redButton.addEventListener('click', redFunction);
// yellowButton.addEventListener('click', yellowFunction);
// blueButton.addEventListener('click', blueFunction);

  // greenButton.addEventListener('click', function(){
  // mostRecentChoice = 1;
  // userChoices.push(mostRecentChoice); } );
  // redButton.addEventListener('click', function(){
  // mostRecentChoice = 2;
  // userChoices.push(mostRecentChoice); } );
  // yellowButton.addEventListener('click', function(){
  // mostRecentChoice = 3;
  // userChoices.push(mostRecentChoice); } );
  // blueButton.addEventListener('click', function(){
  // mostRecentChoice = 4;
  // userChoices.push(mostRecentChoice); } );
// }//while

// let pushToUser = function (){
// };//pushToUser function

//startGameButton.addEventListener('click', aIChooseColor);
