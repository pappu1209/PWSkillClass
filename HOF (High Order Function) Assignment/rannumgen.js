// Define the delay in Three sec.
let delay = 3000;

// a function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

// a function to display the remaining time
function displayTimeRemaining(timeRemaining) {
console.log(`Time remaining: ${timeRemaining / 1000} seconds`);
}

// Call setTimeout  generation of the random number
const time = setTimeout(function() {
const randomNumber = generateRandomNumber();
console.log(`Random number: ${randomNumber}`);
}, delay);

// Call setInterval to display the time remaining
const interval = setInterval(function() {
delay -= 1000;
displayTimeRemaining(delay);
if (delay <= 0) {
    clearInterval(interval);
}
}, 1000);
