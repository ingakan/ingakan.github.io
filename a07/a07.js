

/* var questionsLeft = " [" + quetsions + "questions left]";
var ask = prompt("Do you want to do a MadLibs? Enter yes or no:");

if (ask.toLowerCase() == "no") {
	alert("sorry, that was rhetorical, say yes !!!!!")
}

if (ask.toLowerCase() == "yes") {
	alert("OK, LET'S PLAY!!")
}
*/

var questions = 7;
var questionsLeft = " [" + questions + "questions left]";

//name
var name = prompt("Enter your name: " + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//number
var number = prompt("Enter a number between 0 and 999: " + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//drink
var drink += prompt("What's your favorite drink?: " + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//candy
var candy += prompt("What's your favorite candy?" + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//food
var food += prompt("Enter a 'hipster' food: " + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//color
var color += prompt("What's your favorite color?" + "questionsLeft");
questions -= 1;
questionsLeft = " [" + questions + "questions left]";
//pet
var pet += prompt("cats or dogs?" + "questionsLeft");

alert("ok thats all!");

var sentence = "<h2>This is the future life of " +name+ ".";
sentence += "They are currently 24 years old and trying their best to ignore the fact that they have $" +number+ "K in student debt!";
sentence += "But don't worry, everything will be okay with a " +drink+ " and " +candy+ " in hand 24/7.";
sentence += "All of their friends are at SoulCycle and getting green smoothies and " +food+ " which they definitely can't afford right now, but who cares!?";
sentence += "It's fine, they get to stay at home wearing " +color+ " fuzzy socks while petting their " +number+ " " +pet+ ".</h2>";
document.write(sentence);