var btn = document.querySelectorAll(".drum");   // select all button anchot tags from html page


//for Screen image press
for (let i = 0; i < btn.length; i++) {             // Apply eventListener to all buttons/images
    btn[i].addEventListener("click", handClick)
}

function handClick() {                           // it execute when any image/button click
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

    
}

//for Key Press     --> Anonymus function
document.addEventListener("keydown", function(event){   // Apply eventListener to all keyboard keys using anonymus function
  makeSound(event.key);                       // enent :- It finds all the properties of key that pressed using keyboard.
  buttonAnimation(event.key);                 // event.key :- It finds the key-name that pressed using keyboard.
}
)


function makeSound(key){   //this function takes input from above 2 functions and play a audio according to key that is pressed.
    switch (key) {
        case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

        case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

        default:
        console.log(key);
        break;
    }
}

function buttonAnimation(currentKey){    
    // this function takes input from "for screen image press" or "for key press" methods and makes animations according to pressed key.

    var activation = document.querySelector("."+currentKey);
    activation.classList.add("pressed");                 // add a class dynamically when a key pressed to make animations.

    setTimeout(function (){
        // It removes dynamically link class after a given time (0.1 sec)
            activation.classList.remove("pressed");
        },100
    )
}

/* Named Function
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleClick); 
}

function handleClick(){
    alert("Hello")
} */