var questions = 7;
var questionsLeft = ' [' + questions + ' questions left]';


var name = prompt('What is your name?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';


var number = prompt('Enter a number between 0 and 999' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var drink = prompt('What is your favorite drink?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var candy = prompt('What is your favorite candy?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';


var food = prompt('What is your favorite food (plural form)?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var color = prompt('What is your favorite color?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var pet = prompt('cats or dogs?' + questionsLeft);

alert('cool!');
var sentence = "<h2>This is the future life of " + name + ',';
sentence += ' who is currently 24 years old and trying their best to ignore that they have $' + number + 'K in student debt.';
sentence += ' But do not worry, everything will be okay with a ' + drink + ' and ' + candy + ' in hand 24/7.';
sentence += ' All of their friends are at SoulCycle and getting green smoothies and ' + food + ' but they cannot afford it.';
sentence += ' But all is fine because they get to stay at home wearing ' + color + ' fuzzy socks while petting their ' + number + ' ' + pet + '.</h2>';
document.write(sentence);