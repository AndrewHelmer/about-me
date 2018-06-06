'use strict';
var score = (0);

var userName = prompt('Hello there! Can you please give me your name.');
console.log('the users name is', userName);

var intro = prompt('Hello there ' + userName + '. My name is Andy Helmer. Would you like to play a guessing game about me? Please answer with yes or no. Please keep the answers in lower case.').toLowerCase();
if (intro === 'yes') {
  alert('Yay lets do this!');
  score++;
} else {
  alert('Well that isn\'t very nice ' + userName + ', but ' + userName + ' you\'re going to have to play!');
}
console.log(userName + '\'s answer was ' + intro + ' to intro.');

var amIAPro = prompt('Am I the best coder in the world ' + userName + '?').toLowerCase();
if (amIAPro === 'yes') {
  alert('I love the compliment, but I\'m sry ' + userName + ' you are wrong here.');
} else {
  alert('Well sadly you\'re correct here.');
  score++;
}
console.log(userName + '\'s answer was ' + amIAPro + ' to amIAPRO.');


var sports = prompt('Am I interested in sports ' + userName + '?').toLowerCase();
if (sports === 'yes'){
  alert('Hooray ' + userName + ' you are right! My favorite team is the New Orleans Saints!');
  score++;
} else {
  alert('I can\'t believe you don\'t think I like sports ' + userName);
}
console.log (userName + '\'s answer was ' + sports + ' to sports.');



var noob = prompt('Am I completely new to coding ' + userName + '?').toLowerCase();
if (noob === 'yes') {
  alert('You are correct ' + userName + ' , but I\'m looking to get better.');
  score++;
} else {
  alert('Thanks for believing in me ' + userName + ', but I\'m actually new. I\'m looking to get better though!');
}
console.log(userName + '\'s answer was ' + noob + ' to noob.');



var amITall = prompt(userName +' do you think I\'m tall').toLowerCase();
if(amITall === 'yes'){
  alert('I wish I was ' + userName + '!');
} else {
  alert('You\'re right' + userName + ' I\'m a short person.');
}
console.log(userName + '\'s answer was ' + amITall +' to amITall.');



var studentsInClass = 14;
var guess = prompt('can you guess how many students are in my class?');
guess = parseInt(guess);
for (var i=0; i < 4; i++){
  if (guess === studentsInClass){
    alert ('you are correct');
    break;
  } else if ( guess < studentsInClass) {
    alert('That is not correct. Your guess was too low :(');
    guess = prompt('can you guess how many students are in my class?');
    guess = parseInt(guess);
  } else {
    alert('That is not correct. That number is too high, or you tried to be goofy and typed something other than a number.');
    guess = prompt('can you guess how many students are in my class?');
    guess = parseInt(guess);
  }
}



var favoritePlaces = ['peru','cuba','korea','argentina'];
var arrayGuess = prompt('Can you guess a country I want to visit?').toLocaleLowerCase();
for ( i=0; i < 6; i++){
  console.log('arrayGuess is reffering to the countries the user guessed ' + arrayGuess + '.');
  if (favoritePlaces.includes(arrayGuess)){
    alert ('you are correct');
    break;
  } else {
    alert ('that is not correct');
    arrayGuess = prompt ('Can you guess what countries I want to visit?');
  }
}

alert('You\'re score is ' + score + '.');