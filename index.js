
var numOfDrumButtons = document.querySelectorAll(".drum").length;

// Mouse Click Event Listerner
for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var drumButtonInnerHTML = this.innerHTML;

    playAudio(drumButtonInnerHTML);
    buttonAnimation(drumButtonInnerHTML);
  });
}

// Button Keydown Event Listerner
document.addEventListener("keydown", function(event){
  playAudio(event.key);
  buttonAnimation(event.key);
});

// Play Audio
function playAudio(key){
  var audio;

  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(key);
  }
  audio.play();
}

// Play button animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // after 100 miliseconds, the anonymous function will be executed
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
