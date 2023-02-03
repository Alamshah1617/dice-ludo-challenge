    
            //Player1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // It will generate random number between 1 - 6

var randomLudoImage = "ludo" + randomNumber1 + ".png";  // It will generate random ludo image between ludo1 - ludo6

var randomImageSource = "images/" + randomLudoImage; // It will provide random image source from ludo1 - ludo6

var image1 = document.querySelectorAll("img") [0]; // here we are selecting img 

image1.setAttribute("src", randomImageSource); // here we are set attribute to src randomImageSource

            //Player2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/ludo" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        // Using Conditional statement to guess who is winner!

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥳 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳 ";
} else{
    Document.querySelector("h1").innerHTML = "Draw!";
}