var questions = 8

var questionsLeft = " [" + quetsions + "questions left]";
var ask = prompt("Do you want to do a MadLibs? Enter yes or no:");

if (ask.toLowerCase() == "no") {
	alert("sorry, that was rhetorical, say yes !!!!!")
}

if (ask.toLowerCase() == "yes") {
	alert("OK, LET'S PLAY!!")
}
questions -= 1;
questionsLeft = " [" + questions + "questions left]";

//name
var name = prompt("Enter your name: " + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//number
var number = prompt("Enter a number between 0 and 999: ");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//drink
var drink += prompt("What's your favorite drink?: ");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//candy
var candy += prompt("What's your favorite candy?");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//food
var food += prompt("Enter a 'hipster' food: ");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//color
var color += prompt("What's your favorite color?");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//pet
var pet += prompt("cats or dogs?");

alert("ok cool beans thats all!");

var sentence = "This is the future life of " +name+ ".";
sentence += "They are currently 24 years old and trying their best to ignore the fact that they have $" +number+ "K in student debt!";
sentence += "But don't worry, everything will be okay with a " +drink+ " and " +candy+ " in hand 24/7.";
sentence += "All of their friends are at SoulCycle and getting green smoothies and " +food+ " which they definitely can't afford right now, but who cares!?";
sentence += "It's fine, they get to stay at home wearing " +color+ " fuzzy socks while petting their " +number+ " " +pet+ ".";
document.write(sentence);