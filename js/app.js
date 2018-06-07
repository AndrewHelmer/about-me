'use strict';
var score = (0);
var wrongGuess = (4);
var badGuess = (6);
var totalAnswers = (7);

var userName = prompt('Hello there! Can you please give me your name.');
console.log('the users name is', userName);

var intro = prompt('Hello there ' + userName + '. My name is Andy Helmer. Would you like to play a guessing game about me? Please answer with yes or no if asked.Your answer will be assumed as a no if you type anything else.(yes or no)').toLowerCase();
if (intro === 'yes') {
  alert('Yay lets do this!');
  score++;
} else {
  alert('Well that isn\'t very nice ' + userName + ', but ' + userName + ' you\'re going to have to play!');
}
console.log(userName + '\'s answer was ' + intro + ' to intro.');

var amIAPro = prompt('Am I the best coder in the world ' + userName + '? (yes or no)').toLowerCase();
if (amIAPro === 'yes') {
  alert('I love the compliment, but I\'m sry ' + userName + ' you are wrong here.');
} else {
  alert('Well sadly you\'re correct here.');
  score++;
}
console.log(userName + '\'s answer was ' + amIAPro + ' to amIAPRO.');


var sports = prompt('Am I interested in sports ' + userName + '?(yes or no)').toLowerCase();
if (sports === 'yes'){
  alert('Hooray ' + userName + ' you are right! My favorite team is the New Orleans Saints!');
  score++;
} else {
  alert('I can\'t believe you don\'t think I like sports ' + userName);
}
console.log (userName + '\'s answer was ' + sports + ' to sports.');



var newPerson = prompt('Am I completely new to coding ' + userName + '?(yes or no)').toLowerCase();
if (newPerson === 'yes') {
  alert('You are correct ' + userName + ' , but I\'m looking to get better.');
  score++;
} else {
  alert( + userName + ' I\'m actually new. I\'m looking to get better though!');
}
console.log(userName + '\'s answer was ' + newPerson + ' to noob.');



var amITall = prompt(userName +' do you think I\'m tall.(yes or no)').toLowerCase();
if(amITall === 'yes'){
  alert('I wish I was ' + userName + '!');
} else {
  alert('You\'re right ' + userName + ' I\'m short.');
  score++;
}
console.log(userName + '\'s answer was ' + amITall +' to amITall.');





var studentsInClass = 14;
var guess = prompt('can you guess how many students are in my coding class?( ' + wrongGuess + ' guesses)');
guess = parseInt(guess);
for (var i=0; i < 4; i++){
  console.log('guess is referring to the number guesses ' + userName + ' guessed.' + guess);
  if (guess === studentsInClass){
    alert ('you are correct');
    score++;
    break;
  } else if ( guess < studentsInClass) {
    alert('That is not correct. Your guess was too low :(');
    wrongGuess--;
    guess = prompt('can you guess how many students are in my coding class?( ' + wrongGuess + ' guesses)');
    guess = parseInt(guess);

  } else {
    alert('That is not correct. That number is too high, or you tried to be goofy and typed something other than a number.');
    wrongGuess--;
    guess = prompt('can you guess how many students are in my coding class?( ' + wrongGuess + ' guesses)');
    guess = parseInt(guess);
  }
}
alert('there are 14 students in my class');


var favoritePlaces = ['peru','cuba','korea','argentina'];
var arrayGuess = prompt(userName + ' can you guess a country I want to visit?(' + badGuess + ' guesses)').toLocaleLowerCase();
for ( i=0; i < 6; i++){
  console.log('arrayGuess is reffering to the countries '+ userName + ' guessed ' + arrayGuess + '.');
  if (favoritePlaces.includes(arrayGuess)){
    alert ('you are correct');
    score++;
    break;
  } else {
    alert ('that is not correct');
    badGuess--;
    arrayGuess = prompt(userName + ' can you guess a country I want to visit?(' + badGuess + ' guesses)').toLowerCase();
  }
}
alert('the places I wanted to visit are Peru, Korea, Argentia, and Cuba');
alert(' You\'re score is ' + score + ' out of ' + totalAnswers);
console.log(score + 'is ' + userName + '\'s final score');