const timer = new Timer();

//get the buttons:
let playBtnClick = document.getElementById("playBtn");
let findWally = document.getElementsByClassName("findWally");

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

playBtnClick.addEventListener("click", () => {
  blurArea[0].style.display = "none";
  timer.start(printTime);

  //check why music is not working
  initialMusic = new sound("./sounds/bensound-littleidea.mp3");
  initialMusic.play();
});

function incorrectWally() {
  this.audioForIncorrect = [{ name: "uhOh", file: "../sounds/Icq_uh_Oh.mp3" }];
  let audioInc = new Audio();
  audioInc.play();
  audioInc.volume = 0.1;
}

function correctwally() {
  this.audioForCorrect = [{ name: "foundWally", file: "../sounds/found.mp3" }];
  var audioCor = new Audio();
  audioCor.play();
  audioCor.volume = 0.1;
}
