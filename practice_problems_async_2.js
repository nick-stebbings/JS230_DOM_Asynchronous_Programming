// Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.
var timeId;
function startCounting() {
  let count = 0;
  timeId = setInterval(() => {
    console.log(++count);
  }, 1000);
}

function stopCounting(id) {
  clearInterval(id);
}
startCounting();
setTimeout(() =>     {
  stopCounting(timeId);
}, 5000);
