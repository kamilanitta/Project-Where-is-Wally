//Class for when Play button is pushed
class Timer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    return (this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000));
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}

//Class for when Wally is found

class FindWally {
  constructor(findWallyX = 0, findWallyY = 0, actualImage, wallyDiv) {
    this.findWallyX = findWallyX + "px";
    this.findWallyY = findWallyY + "px";
    this.wallyDiv = wallyDiv;
    this.position = this.wallyDiv.getBoundingClientRect();
    this.actualImage = actualImage;
    this.notFoundSound = "../sounds/Icq_uh_Oh.mp3";
    this.foundSound = "../sounds/found.mp3";
  }
  // this.findWally.style.position =

  //methods
  getPoints() {
    if (this.findWally === this.correctSpot) {
      this.currentPoints += 1;
      this.isFinished();
      return true;
    }
  }

  getWallyPositionX() {
    //check how to change position of Find Wally Box
    return this.position.right;
  }

  getWallyPositionY() {
    //check how to change position of Find Wally Box
    return this.position.bottom;
  }

  setWallyPosition(x_pos, y_pos) {
    this.wallyDiv.style.right = x_pos + "px";
    this.wallyDiv.style.bottom = y_pos + "px";
  }

  isFinished() {
    if (this.currentPoints === 4) {
      alert("Congrats!!! You found me ;)");
    }
  }
}
