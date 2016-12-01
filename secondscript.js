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
function setIntOne (){
  highlight(ranNum);
}//setIntOne
function setIntTwo (){
  clearInterval(interval);
  unhighlight(ranNum);
}//setIntTwo
function setIntThree (){
  clearInterval(interval2);
}//setIntThree
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
function flipContinueGame (){
  continueGame = !continueGame;//sets continueGame to true
}//flipContinueGame


startGameButton.addEventListener('click', flipContinueGame());

if (continueGame === true){

  if (playersTurn === false){
    //computers turn now
    round++;
    //remember to put the round on screen here
    userChoices = [];  //erases all user choices
    ranNum = Math.floor((Math.random() * 4) + 1);//picks a random number
    computerChoices.push(ranNum);// pushes to the computers array
    for (var n in computerChoices){
      var interval = setInterval(setIntOne (), 500);
      var interval2 = setInterval(setIntTwo (), 1000);
      var interval3 = setInterval(setIntThree (), 1001);
    }//loop through the computers array






  }//if playersTurn
  else{



  }// else playersTurn








}//if continueGame
else{
  console.log("You lost...try again?");


}//else continueGame
