//lots of variables
var continueGame = false;
var playersTurn = false;

var computerChoices = [];//array of numbers
var userChoices = [];
var temp = [];
var ranNum = [];
var round = 0;

var startGameButton = document.getElementById('startButton');
var greenButton = document.getElementById('greenButton');
var redButton = document.getElementById('redButton');
var yellowButton = document.getElementById('yellowButton');
var blueButton = document.getElementById('blueButton');


//lots of functions below

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
}//unhighlight
function decide (){
//input loop here lol I forgot it was a memory game
      if (userChoices[userChoices.length - 1] !== computerChoices[computerChoices.length - 1]){
        console.log(computerChoices, userChoices, "sorry");
      }//if
      else {
        console.log(computerChoices, userChoices, "yay");
      }//else
}//decidefunction
function flipContinueGameVariable (){
    continueGame = !continueGame;//sets continueGame to true
}//flipContinueGame

function waitForTheClick(){
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
  }//end of blueFunction
}//end of wait for the click

function theComputersTurn(){}
function thePlayersTurn(){}

function getEverythingStarted(){
    flipContinueGameVariable();
    if (continueGame === true){


        if (playersTurn === false){
            //computers turn now
            round++;
            //remember to put the round on screen here
            userChoices = [];  //erases all user choices
            ranNum = Math.floor((Math.random() * 4) + 1);//picks a random number
            computerChoices.push(ranNum);// pushes to the computers array

            for (var n in computerChoices){
              setTimeout(function(){highlight(computerChoices[n]);}, 500);
              console.log("first random number = " + computerChoices[n]);
              setTimeout(function(){unhighlight(computerChoices[n]);}, 1000);
              console.log("first random number = " + computerChoices[n]);
              console.log("playersTurn1 = " + playersTurn);
              playersTurn = true;
              console.log("playersTurn2 = " + playersTurn);
            }//loop through the computers array
        }//if playersTurn

        if (playersTurn === true){
          console.log("if you can see this it is the players turn now");
          waitForTheClick();
          console.log(userChoices);


        }//playersTurn
    }//if continueGame
    else{
      console.log("If you can read this you lost the game.");
    }//else continueGame



}//getEverythingStarted

startGameButton.addEventListener('click', getEverythingStarted);
