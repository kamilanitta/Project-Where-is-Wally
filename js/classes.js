class FindWally {
  constructor() {
    this.points = 0;
    this.timers = 0;
    this.wally = 0;
  }
  getPoints() {
    if (this.wally !== 0) {
      this.points += 1;
    }
  }

  isTimeOver() {
    if (this.timers === 0) {
      return "Game Over!";
    }
  }
}

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

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = Timer;
}
