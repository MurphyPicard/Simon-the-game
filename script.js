//Simon
//nothing yet

//define some variables
let computerChoices = [];//will be an array of colors
let userChoices = [];//will be an array of colors
let mostRecentChoice = [];

let startGameButton = document.getElementById('startButton');

let greenButton = document.getElementById('greenButton');
let redButton = document.getElementById('redButton');
let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');



let pushToComp = function (){
  var randomNumber = Math.floor((Math.random() * 4) + 1);
  computerChoices.push(randomNumber);
};//pushToComp function

startGameButton.addEventListener('click', pushToComp);


greenButton.addEventListener('click', function(){
mostRecentChoice = 1;
userChoices.push(mostRecentChoice); } );

redButton.addEventListener('click', function(){
mostRecentChoice = 2;
userChoices.push(mostRecentChoice); } );

yellowButton.addEventListener('click', function(){
mostRecentChoice = 3;
userChoices.push(mostRecentChoice); } );

blueButton.addEventListener('click', function(){
mostRecentChoice = 4;
userChoices.push(mostRecentChoice); } );

let pushToUser = function (){
};//pushToUser function




//startGameButton.addEventListener('click', aIChooseColor);
