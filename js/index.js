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

playBtnClick.addEventListener("click", () => {
  blurArea[0].style.display = "none";
  timer.start(printTime);

  //check why music is not working
  initialMusic = new Sound("./sounds/bensound-littleidea.mp3");
  initialMusic.play();
});

//Action that happen when Wally is found
const game = new FindWally(
  0,
  0,
  "../images/1_waldoCity.jpeg",
  document.getElementById("findWally")
);

let initialPoints = document.getElementsByClassName("countPoints");
let correctSpot = document.getElementsByClassName("foundSound");
let wrongSpot = document.getElementsByClassName("notFoundSound");
let currentImage = document.getElementsByClassName("lower_section");
console.log(game.position);
game.setWallyPosition(400, 40);
console.log(game.getWallyPositionX(), game.getWallyPositionY());

function printPoints() {
  const points = getPoints();
  initialPoints.innerText = points;
}

function checkIfCorrect() {
  let currentImage = new Image();
  if (findWally === true) {
    this.actualImage.toggle("change");
  }
}

function soundIncorrect() {
  this.audioForIncorrect = [{ name: "uhOh", file: "../sounds/Icq_uh_Oh.mp3" }];
  let audioInc = new Audio();
  audioInc.play();
  audioInc.volume = 0.1;
}

function soundCorrect() {
  this.audioForCorrect = [{ name: "foundWally", file: "../sounds/found.mp3" }];
  var audioCor = new Audio();
  audioCor.play();
  audioCor.volume = 0.1;
}
