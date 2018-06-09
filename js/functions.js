'use strict';
var score = (0);
var wrongGuess = (4);
var badGuess = (6);
var totalAnswers = (7);
var studentsInClass = 14;
var favoritePlaces = ['peru','cuba','new zealand','argentina'];

function correct() {
  console.log(userName + ' was correct');
  score++;
  alert('Well done ' + userName + ', that was correct!');
}

function incorrect() {
  console.log(userName + ' was incorrect');
  alert('Ouch ' + userName + ', that was incorrect!');
}

var userName = prompt('Hello there! Can you please give me your name.');
console.log('the users name is', userName);
//question 1
function intro() {
  var answer = prompt('Hello there ' + userName + '. My name is Andy Helmer. Would you like to play a guessing game about me? Please answer with yes or no if asked.Your answer will be assumed as a no if you type anything else.(yes or no)').toLowerCase();
  if (answer === 'yes') {
    correct();
  } else {
    incorrect();
  }
}
console.log(userName + '\'s answer was ' + intro + ' to intro.');

// question 2
function question2() {
  var amIPro = prompt('Am I the best coder in the world ' + userName + '? (yes or no)').toLowerCase();
  if (amIPro === 'yes') {
    incorrect();
  } else {
    correct();
  }
}
console.log(userName + '\'s answer was ' + question2 + ' to pro.');

// question 3
function question3()
{
  console.log (userName + '\'s answer was ' + sports + ' to sports.');
  var sports = prompt('Am I interested in sports ' + userName + '?(yes or no)').toLowerCase();
  if (sports === 'yes'){
    correct();
  } else {
    incorrect();
  }
}



// question 4
function question4() {
  var newPerson= prompt('Am I completely new to coding ' + userName + '?(yes or no)').toLowerCase();
  if (newPerson === 'yes') {
    correct();
  } else {
    incorrect();
  }
}
console.log(userName + '\'s answer was ' + question4 + ' to noob.');


//question 5
function question5() {
  var amITall =prompt(userName +' do you think I\'m tall.(yes or no)').toLowerCase();
  if(amITall === 'yes'){
    incorrect();
  } else {
    correct();
  }
}
console.log(userName + '\'s answer was ' + question5 +' to question5.');





//question 6
function question6(){
  var guess = prompt('can you guess how many students are in my coding class?( ' + wrongGuess + ' guesses)');
  guess = parseInt(guess);
  for (var i=0; i < 4; i++){
    console.log('guess is referring to the number guesses ' + userName + ' guessed.' + guess);
    if (guess === studentsInClass){
      correct();
      break;
    } else if ( guess < studentsInClass) {
      alert('That\'s wrong. Your guess was too low');
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
}


//question 7
function question7(){
  var arrayGuess = prompt(userName + ' can you guess a country I want to visit?(' + badGuess + ' guesses)').toLocaleLowerCase();
  for (var i=0; i < 6; i++){
    console.log('arrayGuess is reffering to the countries '+ userName + ' guessed ' + arrayGuess + '.');
    if (favoritePlaces.includes(arrayGuess)){
      correct();
      break;
    } else {
      alert (incorrect);
      badGuess--;
      arrayGuess = prompt(userName + ' can you guess a country I want to visit?(' + badGuess + ' guesses)').toLowerCase();
    }
  }
}
//prompts starting point.
intro();
question2();
question3();
question4();
question5();
question6();
alert('there are 14 students in my class');
question7();
alert('the places I wanted to visit are Peru, Korea, Argentia, and Cuba');


// final score
alert(' You\'re score is ' + score + ' out of ' + totalAnswers);
console.log(score + 'is ' + userName + '\'s final score');



