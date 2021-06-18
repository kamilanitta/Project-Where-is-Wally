const timer = new Timer();

//get the buttons:
let playBtnClick = document.getElementById("playBtn");

// Timer
const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");

function printTime() {
  const sec = printSeconds();
  const min = printMinutes();
}

function printMinutes() {
  const printMin = timer.computeTwoDigitNumber(timer.getMinutes());
  minUniElement.innerText = printMin[1];
  minDecElement.innerText = printMin[0];
}

function printSeconds() {
  const printSec = timer.computeTwoDigitNumber(timer.getSeconds());
  secUniElement.innerText = printSec[1];
  secDecElement.innerText = printSec[0];
}

//nao pode estar dentro da funcao
//getElements devolve array;
const blurArea = document.getElementsByClassName("blur");
const playStartSound = document.getElementsByClassName("playSound");
const pauseSound = document.getElementById("stopBtn");
let playSound;

playBtnClick.addEventListener("click", () => {
  blurArea[0].style.display = "none";
  timer.start(printTime);
  playSound = new Audio("./sounds/bensound-littleidea.mp3");
  playSound.volume = 0.1;
  playSound.play();
});

pauseSound.addEventListener("click", () => {
  playSound.pause();
});

//Find Wally
let findWally = document.getElementById("findWally");
let initialPoints = document.querySelector(".countPoints");
let currentImage = document.getElementById("image_section");
let wallyFound = false;
let currentScore = 0;
currentImage.style.backgroundImage = 'url("./images/1_waldoCity.jpeg")';

//Event change color of border, when the correct spot is found.
findWally.addEventListener("click", () => {
  findWally.style.borderColor = "red";
  updateScore();
  let foundSound = new Audio("./sounds/yupiiii.mp3");
  foundSound.volume = 0.8;
  foundSound.play();
  wallyFound = true;
  setTimeout(function () {
    if (currentScore != 4) {
      alert("You found me!");
    } else {
      alert("You found me, Sherlock Holmes!");
    }
    changeImage();
  }, 500);
});

function updateScore() {
  currentScore += 1;
  initialPoints.innerText = currentScore;
  // console.log(currentScore);
}

currentImage.addEventListener("click", () => {
  let notFoundSound = new Audio("./sounds/Icq_Uh_Oh.mp3");
  notFoundSound.volume = 0.8;
  notFoundSound.play();
  wallyFound = false;
  setTimeout(function () {
    alert("Sorry, not yet!");
  }, 500);
});

//Changing images

let img2 = 'url("./images/2_wallySki.jpeg")';
let img3 = 'url("./images/3_wallySpace.jpeg")';
let img4 = 'url("./images/4_wallyOcean.jpeg")';
let img5 = 'url("./images/5_EndWally.jpeg")';
let winText = document.getElementById("winText");

function changeImage() {
  if (currentScore === 1) {
    currentImage.style.backgroundImage = img2;
    findWally.style.borderColor = "transparent";
    findWally.style.right = "11%";
    findWally.style.bottom = "26%";
  } else if (currentScore === 2) {
    currentImage.style.backgroundImage = img3;
    findWally.style.borderColor = "transparent";
    findWally.style.right = "45%";
    findWally.style.bottom = "35%";
    findWally.style.width = "20px";
    findWally.style.heigth = "30px";
  } else if (currentScore === 3) {
    currentImage.style.backgroundImage = img4;
    findWally.style.borderColor = "transparent";
    findWally.style.right = "39.5%";
    findWally.style.bottom = "75%";
    findWally.style.width = "20px";
    findWally.style.heigth = "20px";
  } else if (currentScore === 4) {
    currentImage.style.backgroundImage = img5;
    findWally.style.borderColor = "transparent";
    winText.innerHTML = "You won!!!";
  }
}
//

//
// console.log(game.position);
// game.setWallyPosition(400, 40);
// console.log(game.getWallyPositionX(), game.getWallyPositionY());

// function printPoints() {
//   const points = getPoints();
//   initialPoints.innerText = points;
// }

// function checkIfCorrect() {
//   let currentImage = new Image();
//   if (findWally === true) {
//     this.actualImage.toggle("change");
//   }
// }

// function soundIncorrect() {
//   this.audioForIncorrect = [{ name: "uhOh", file: "../sounds/Icq_uh_Oh.mp3" }];
//   let audioInc = new Audio();
//   audioInc.play();
//   audioInc.volume = 0.1;
// }

// function soundCorrect() {
//   this.audioForCorrect = [{ name: "foundWally", file: "../sounds/found.mp3" }];
//   var audioCor = new Audio();
//   audioCor.play();
//   audioCor.volume = 0.1;
// }
