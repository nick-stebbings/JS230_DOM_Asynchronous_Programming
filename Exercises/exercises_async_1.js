// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

function randomizer(...callbacks) {
  let n = callbacks.length;
  let timer = 0;

  let timeId = setInterval(() => {
    console.log(++timer);
    if (timer == 2 * n) {
      clearInterval(timeId);
    }
  }, 1000);

  for (let i = 0; i < n; i++) {
    const currentCallback = callbacks[i];
    let timeDelay = Math.floor(Math.random() * 2 * n) * 1000;
    setTimeout(currentCallback, timeDelay);
  }
}

function callback1() {
  console.log("callback1");
}

function callback2() {
  console.log("callback2");
}

function callback3() {
  console.log("callback3");
}

randomizer(callback1, callback2, callback3);
