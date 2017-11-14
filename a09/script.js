function arrayLoop(){

	var chilly = ["crisp wind", "locks tickling", "rosy cheeks", "thick knits", "zipped tight", "zipped high", "textured soles", "on heavy boots", "crunch of snow", "glass reflection", "of a coated path", "this is", "frozen nature", "<a href='temperature.html'>it can't be <i>that</i> cold...</a>"];
        
        for (var i = 0; i < chilly.length; i++) {
            $("body").append("<p>" + chilly[i] + "</p>");

}
}

function arrayLoop2(){

	var meme = ["<img src='images/frozen.gif'>", "<button type='button' onclick='arrayLoop3();'>but also me</button>"];
        
        for (var i = 0; i < meme.length; i++) {
            $("body").append("<p>" + meme[i] + "</p>");

}
}
function arrayLoop3(){

	var meme2 = ["<img src='images/doge.gif'>", "<a href='temperature.html'>refresh</a>", "<a href='chilly.html'>go back</a>", "<a href='index.html'>back to start</a>"];
        
        for (var i = 0; i < meme2.length; i++) {
            $("body").append("<p>" + meme2[i] + "</p>");

}
}