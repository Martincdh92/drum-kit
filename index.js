
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        makeSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
});

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(character) {
    switch (character) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function animateButton(character) {
    var clickedButton = document.querySelector("." + character);
    clickedButton.classList.add("pressed");
    
    setTimeout(function() {
        clickedButton.classList.remove("pressed");
    }, 150);
}
