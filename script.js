let computerChoices = [];//array of numbers
let userChoices = [];//array of numbers
let mostRecentChoice = [];

let startGameButton = document.getElementById('startButton');

let greenButton = document.getElementById('greenButton');
let redButton = document.getElementById('redButton');
let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');

let userTurn = true;
var randomNumber = 0;
let roundNumber = 0;



startGameButton.addEventListener('click', computersFirstChoice);
//add initial number to computerChoices array

function computersFirstChoice(){
  computerChoices = [];
  userChoices = [];
  roundNumber = 1;
  randomNumber = Math.floor((Math.random() * 4) + 1);
  computerChoices.push(randomNumber);

  var interval = setInterval(function(){
    highlight(randomNumber);
  }, 500);

  var interval2 = setInterval(function(){
    clearInterval(interval);
    unhighlight(randomNumber);
  }, 1000);

  var interval3 = setInterval(function(){
    clearInterval(interval2);
  }, 1001);
  //beep
  console.log("Com array: "+computerChoices+" , U array: "+ userChoices+ ".");
  decide();
}//computersFirstChoice




greenButton.addEventListener('click', greenFunction);
redButton.addEventListener('click', redFunction);
yellowButton.addEventListener('click', yellowFunction);
blueButton.addEventListener('click', blueFunction);
function greenFunction (){
  mostRecentChoice = 1;
  userChoices.push(mostRecentChoice);
  var interval = setInterval(function(){
    highlight(mostRecentChoice);
  }, 500);
  var interval2 = setInterval(function(){
    clearInterval(interval);
    unhighlight(mostRecentChoice);
  }, 1000);
  var interval3 = setInterval(function(){
    clearInterval(interval2);
  }, 1001);
  // userTurn = !userTurn;
}
function redFunction (){
  mostRecentChoice = 2;
  userChoices.push(mostRecentChoice);
  var interval = setInterval(function(){
    highlight(mostRecentChoice);
  }, 500);
  var interval2 = setInterval(function(){
    clearInterval(interval);
    unhighlight(mostRecentChoice);
  }, 1000);
  var interval3 = setInterval(function(){
    clearInterval(interval2);
  }, 1001);
  // userTurn = !userTurn;
}
function yellowFunction(){
  mostRecentChoice = 3;
  userChoices.push(mostRecentChoice);
  var interval = setInterval(function(){
    highlight(mostRecentChoice);
  }, 500);
  var interval2 = setInterval(function(){
    clearInterval(interval);
    unhighlight(mostRecentChoice);
  }, 1000);
  var interval3 = setInterval(function(){
    clearInterval(interval2);
  }, 1001);
  // userTurn = !userTurn;
}
function blueFunction(){
  mostRecentChoice = 4;
  userChoices.push(mostRecentChoice);
  var interval = setInterval(function(){
    highlight(mostRecentChoice);
  }, 500);
  var interval2 = setInterval(function(){
    clearInterval(interval);
    unhighlight(mostRecentChoice);
  }, 1000);
  var interval3 = setInterval(function(){
    clearInterval(interval2);
  }, 1001);
  // userTurn = !userTurn;
}



function computersXChoice(){};

function playersXChoice(){};

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


//function that will highlight colors
function highlight (num){
  switch(num){
    case 1:
      greenButton.style.backgroundColor = "#0a0";
      break;
    case 2:
      redButton.style.backgroundColor = "#a00";
      break;
    case 3:
      yellowButton.style.backgroundColor = "#aa0";
      break;
    case 4:
      blueButton.style.backgroundColor = "#00a";
      break;
  }//switch
}//highlight function

function unhighlight (num){
  switch(num){
    case 1:
      greenButton.style.backgroundColor = "green";
      break;
    case 2:
      redButton.style.backgroundColor = "red";
      break;
    case 3:
      yellowButton.style.backgroundColor = "yellow";
      break;
    case 4:
      blueButton.style.backgroundColor = "blue";
      break;
  }//switch
}



//functions to push a number to users array

// var fourButtonDiv = document.querySelector(".fourButtons");
// fourButtonDiv.addEventListener("click",  pushToUser()  , false);
//
// function pushToUser(x){
//   switch(x){
//     case green:
//       mostRecentChoice = 1;
//       userChoices.push(mostRecentChoice);
//       break;
//     case "red":
//       mostRecentChoice = 2;
//       userChoices.push(mostRecentChoice);
//       break;
//     case "yellow":
//       mostRecentChoice = 3;
//       userChoices.push(mostRecentChoice);
//       break;
//     case "blue":
//       mostRecentChoice = 4;
//       userChoices.push(mostRecentChoice);
//       break;
//   }//switch
// }//pushToUser


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
