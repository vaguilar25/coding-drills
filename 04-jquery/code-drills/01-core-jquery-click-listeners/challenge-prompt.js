

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    //
    // Within the document, set an on click listener for the element with a class of "letterA"
    
    $("#text-div").append ("<p>");
    $(".letterA").click(function() {
        // When that element is clicked, append the string "A" to the `text-div` element
        var letterTag= $("<span>");
        letterTag.text("A");
        $("#text-div").append(letterTag);
   
    });

        
    // Within the document, set an on click listener for the element with a class of "letterB"
    $(".letterB").click(function() {
           // When that element is clicked, append the string "B" to the `text-div` element
        var letterTag= $("<span>");
        letterTag.text("B");
        $("#text-div").append(letterTag);
   
    });
    
   
    // Continue for the other letters
    $(".letterC").click(function() {
        var letterTag=$("<span>");
        letterTag.text("C");
        $("#text-div").append(letterTag);
        
    });

    $(".letterD").click(function(){
        var letterTag = $("<span>");
        letterTag.text("D");
        $("#text-div").append(letterTag);

    });

    $(".letterE").click(function(){
        var letterTag = $("<span>");
        letterTag.text("E");
        $("#text-div").append(letterTag);
    });

    $(".letterF").click(function(){
        var letterTag = $("<span>");
        letterTag.text("F");
        $("#text-div").append(letterTag);
    });

    
    $(".letterG").click(function(){
        var letterTag = $("<span>");
        letterTag.text("G");
        $("#text-div").append(letterTag);
    });

    
    $(".letterH").click(function(){
        var letterTag = $("<span>");
        letterTag.text("H");
        $("#text-div").append(letterTag);
    });

    
    $(".letterI").click(function(){
        var letterTag = $("<span>");
        letterTag.text("I");
        $("#text-div").append(letterTag);
    });

    
    $(".letterJ").click(function(){
        var letterTag = $("<span>");
        letterTag.text("J");
        $("#text-div").append(letterTag);
    });

    

    
    $(".letterK").click(function(){
        var letterTag = $("<span>");
        letterTag.text("K");
        $("#text-div").append(letterTag);
    });

    
    $(".letterL").click(function(){
        var letterTag = $("<span>");
        letterTag.text("L");
        $("#text-div").append(letterTag);
    });

    
    $(".letterM").click(function(){
        var letterTag = $("<span>");
        letterTag.text("M");
        $("#text-div").append(letterTag);
    });

    
    $(".letterN").click(function(){
        var letterTag = $("<span>");
        letterTag.text("N");
        $("#text-div").append(letterTag);
    });

    
    $(".letterO").click(function(){
        var letterTag = $("<span>");
        letterTag.text("O");
        $("#text-div").append(letterTag);
    });

    
    $(".letterP").click(function(){
        var letterTag = $("<span>");
        letterTag.text("P");
        $("#text-div").append(letterTag);
    });

    
    $(".letterQ").click(function(){
        var letterTag = $("<span>");
        letterTag.text("Q");
        $("#text-div").append(letterTag);
    });

    
    $(".letterR").click(function(){
        var letterTag = $("<span>");
        letterTag.text("R");
        $("#text-div").append(letterTag);
    });

    
    $(".letterS").click(function(){
        var letterTag = $("<span>");
        letterTag.text("S");
        $("#text-div").append(letterTag);
    });

    
    $(".letterT").click(function(){
        var letterTag = $("<span>");
        letterTag.text("T");
        $("#text-div").append(letterTag);
    });

    
    $(".letterU").click(function(){
        var letterTag = $("<span>");
        letterTag.text("U");
        $("#text-div").append(letterTag);
    });

    
    $(".letterV").click(function(){
        var letterTag = $("<span>");
        letterTag.text("V");
        $("#text-div").append(letterTag);
    });

    
    $(".letterW").click(function(){
        var letterTag = $("<span>");
        letterTag.text("W");
        $("#text-div").append(letterTag);
    });

    
    $(".letterX").click(function(){
        var letterTag = $("<span>");
        letterTag.text("X");
        $("#text-div").append(letterTag);
    });
        
    
    $(".letterY").click(function(){
        var letterTag = $("<span>");
        letterTag.text("Y");
        $("#text-div").append(letterTag);
    });

    
    $(".letterZ").click(function(){
        var letterTag = $("<span>");
        letterTag.text("Z");
        $("#text-div").append(letterTag);
    });
})
