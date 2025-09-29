// way we are accessing the window in this class
// using ()=>{} format
window.onload = () => {
  // using const variable declaration
  // this variable will never change to another element
  const moveDiv = document.getElementById("move");

  // getting the first button
  const rotateButton = document.getElementById("rotate");

  // getting the stop button
  const stopButton = document.getElementById("stop");

  // getting the time paragraph
  const time = document.getElementById("time");

  // adjust the angle of my div
  let angle = 0;

  // create a variable to store which interval we want to stop
  let intervalId;

  // adjust the x position variables
  let leftPos = 0;
  let speed = 1;

  // rotate the moveDiv using css and js
  rotateButton.addEventListener("click", () => {
    // setInterval takes in 2 params:
    // 1. callback function (function that happens when the interval elapses)
    // 2. amount of time before the interval happens again (in ms)
    // 1 second = 1000 milliseconds
    intervalId = setInterval(() => {
      angle++; // increase my moveDiv by 1

      // grab the rotation using the style
      // moveDiv.style.transform = "rotate(" + angle + "deg)"
      // shorthand to inject variables into strings
      moveDiv.style.transform = `rotate(${angle}deg)`;

      // adding speed to left pos
      leftPos += speed;

      if (leftPos >= window.innerWidth || leftPos < 0) {
        speed *= -1;
      }
      // change css property based off math calc
      moveDiv.style.left = leftPos;
    }, 10);
  });

  // make the rect stop moving when button clicked
  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
  });

  

  setInterval(() => {
    // get the current browser/computer time
    let date = new Date();
    console.log('test')
    // % is the remainder, so it allows us to convert 24hr time to 12 hour time by using the remainder of 12
    time.textContent =
      (date.getHours() % 12) +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
  }, 1000);
};
