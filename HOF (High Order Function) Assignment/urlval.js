// Define the regular expression to match valid URLs
const urlRegex = /^(https?:\/\/)[\w\d\S]+\.[\w]+$/i;

// Define the input to test against the regular expression
const input1 = "http://www.google.com";
const input2 = "https://www.yahoo.com";
const input3 = "http://abc123!@.com";
const input4 = "https://www.xyz.com";

// Test the input against the regular expression and print the result
console.log(`${input1} matches the URL regex: ${urlRegex.test(input1)}`);
console.log(`${input2} matches the URL regex: ${urlRegex.test(input2)}`);
console.log(`${input3} matches the URL regex: ${urlRegex.test(input3)}`);
console.log(`${input4} matches the URL regex: ${urlRegex.test(input4)}`);
