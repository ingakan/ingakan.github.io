function arrayLoop(){

	var donuts = ["blueberry glaze", "chocolate glaze", "chocolate sprinkle", "custard", "glazed", "jelly", "patriotic sprinkle", "peanut butter", "rasberry glaze", "strawberry glaze", "strawberry sprinkle", "traditional"];
        
        for (var i = 0; i < donuts.length; i++) {
            $("body").append("<p>" + donuts[i] + "</p>");

    
}
}