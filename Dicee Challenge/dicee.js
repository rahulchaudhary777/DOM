// for left hand side dice

var randomNumber1 = Math.floor(Math.random()*6)+1;  // 1-6

var randomDiceImage = "dice"+randomNumber1+".png"  // dice1.png - dice6.png

var randomImageSource1 = "images/"+randomDiceImage  // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]   // select first image anchor-tag

image1.setAttribute("src", randomImageSource1);      // change image of image1 according to random number


// for right hand side dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice"+randomNumber2+".png"  // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);      // change image of image2 according to random number


//Check Which player Wins
var h1 = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    h1.textContent = "🚩 Player1 Wins";   
}
else if(randomNumber1 < randomNumber2){
    h1.textContent = "Player2 Wins 🚩";
}
else{
    h1.textContent = "Draw!";
}