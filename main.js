//mouse event
for (var i = 0; i < document.querySelectorAll(".set button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        buttonEvent(this.innerHTML);
        buttonEventAnimation(this.innerHTML);
    }); 
}

//keyboard event
document.addEventListener("keypress", function (event) {
    buttonEvent(event.key);
    buttonEventAnimation(event.key);
})

//make sound on event
function buttonEvent (buttonEventValue){
    switch (buttonEventValue) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonEventValue);
    }
}

//Event Animation
function buttonEventAnimation(buttonEventValue) {
    document.querySelector("."+buttonEventValue).classList.add("pressed");
    setTimeout( function () {
        document.querySelector("."+buttonEventValue).classList.remove("pressed");
    }, 100);
}