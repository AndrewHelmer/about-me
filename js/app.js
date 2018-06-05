'use strict';

var userName = prompt('Hello there! Can you please give me your name.');
console.log('the users name is', userName);

var intro = prompt('Hello there ' + userName + '. My name is Andy Helmer. Would you like to play a guessing game about me? Please answer with yes or no. Please keep the answers in lower case.').toLowerCase();
if (intro === 'yes') {
  alert('Yay you are actually interested in me!');
} else {
  alert('Well that isn\'t very nice ' + userName + ', but ' + userName + ' you\'re going to have to play!');
}
console.log(userName + '\'s answer was ' + intro);

var amIAPro = prompt('Am I the best coder in the world ' + userName + '?').toLowerCase();
if (amIAPro === 'yes') {
  alert('I love the compliment, but I\'m sry ' + userName + ' you are wrong here.');
} else {
  alert('Well sadly you\'re correct here.');
}
console.log(userName + '\'s answer was ' + amIAPro);

var sports = prompt('Am I interested in sports ' + userName + '?').toLowerCase();
if (sports === 'yes'){
  alert('Hooray ' + userName + ' you are right! My favorite team is the New Orleans Saints!');
} else {
  alert('I can\'t believe you don\'t think I like sports ' + userName);
}
console.log (userName + '\'s answer was ' + sports);

var noob = prompt('Am I completely new to coding ' + userName + '?').toLowerCase();
if (noob === 'yes') {
  alert('You are correct ' + userName + ' , but I\'m looking to get better.');
} else {
  alert('Thanks for believing in me ' + userName + ', but I\'m actually new. I\'m looking to get better though!');
}
console.log(userName + '\'s answer was ' + noob);

var doYouLikeMe = prompt(userName +' since you\'ve learned about me. Do you think you like me ' + userName + '?').toLowerCase();
if(doYouLikeMe === 'yes'){
  alert('WOOHOO you\'re awesome ' + userName + '!');
} else {
  alert('Well thanks ' + userName + ' you just ruined my day.');
}
console.log(userName + '\'s answer was ' + doYouLikeMe +'.');