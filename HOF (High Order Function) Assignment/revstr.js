
// / Define the input string
const input = "Hello, world!";

// Define a function to reverse the string
function reverseString(str) {
return str.split("").reverse().join("");
}

// Call setTimeout to delay the reversal by 2 seconds
setTimeout(function() {
const reversed = reverseString(input);
console.log(reversed);
}, 2000);