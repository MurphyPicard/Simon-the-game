//Simon
//nothing yet

//define some variables
let computerChoices = [];//will be an array of colors
let userChoices = [];//will be an array of colors
let mostRecentChoice = [];

let startGameButton = document.getElementById('startButton');
let continueGame = false;

let greenButton = document.getElementById('greenButton');
let redButton = document.getElementById('redButton');
let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');



let pushToComp = function (){
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  computerChoices.push(randomNumber);
  continueGame = true;
};//pushToComp function
startGameButton.addEventListener('click', pushToComp);
//add initial number to computerChoices array
console.log(continueGame);


let greenFunction = function (){
  mostRecentChoice = 1;
  userChoices.push(mostRecentChoice);
};
let redFunction = function (){
  mostRecentChoice = 2;
  userChoices.push(mostRecentChoice);
};
let yellowFunction = function (){
  mostRecentChoice = 3;
  userChoices.push(mostRecentChoice);
};
let blueFunction = function (){
  mostRecentChoice = 4;
  userChoices.push(mostRecentChoice);
};
greenButton.addEventListener('click', greenFunction);
redButton.addEventListener('click', redFunction);
yellowButton.addEventListener('click', yellowFunction);
blueButton.addEventListener('click', blueFunction);

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

function decide (){



      if (userChoices[userChoices.length - 1] !== computerChoices[computerChoices.length - 1]){
        console.log(computerChoices, userChoices, "sorry");

      }//if
      else {
        console.log(computerChoices, userChoices, "yay");

      }//else



}//decidefunction

// let pushToUser = function (){
// };//pushToUser function




//startGameButton.addEventListener('click', aIChooseColor);
