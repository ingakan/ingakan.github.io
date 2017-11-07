/* var thething = document.querySelector("h1");

console.log(thething)
thething.addEventListener("click", clickyfunstuff);

function clickystuff() {
	var paragraph = document.querySelector(".output p");

	paragraph.innerHTML = "hello <strong>tiffany</strong>";

	var trigger = document.querySelector(".output p strong")
	console.log(trigger)

	trigger.addEventListener("click", addImage);
	console.log("it works!");
}

function addImage() {
	var output = document.querySelector(".output");
	console.log(output)

	var dogpic = document.createElement("img")

	dogpic.src = "images/newton2.jpg"
	dogpic.id = "dog"
	console.log(dogpic)

	output.appendChild(dogpic)

	//remove
	dogpic.addEventListener("click", function(){
		document.querySelector

	});
}
*/

var namestring = "xiujie, jess, vincent, analisse, inga, tiffany, qiyao, jiayi, dan, meredith, khe, yasmin, lily, yuchen, jeanette"
console.log(namestring)

var exampleArray = [1, 2, 3, 4, "hi", null, true]
console.log(exampleArray)
console.log(exampleArray.toString())

var nameArray = namestring.split(",")
console.log(nameArray)



/* for(var i = 0; i < nameArray.length; i++) {
	console.log(exampleArray[i])
}
*/

nameArray.forEach(funtion(){
	console.log('hello')
})


var listItem = document.createElement("li")
listItem.textContent = "hello"

var container = document.querySelector(".output ul")

container.appendChild(listItem)

























