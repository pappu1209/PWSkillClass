// Define the regular expression to match valid LinkedIn profile URLs
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-z\d]$/i;

// Define the input to test against the regular expression
const input1 = "https://www.linkedin.com/in/joy-doe-123a";
const input2 = "https://www.linkedin.com/in/joy_doe";
const input3 = "https://www.linkedin.com/in/1234567890123456789012345678901";
const input4 = "https://www.linkedin.com/in/sohan-dsha_123";
const input5 = "https://www.linkedin.com/in/jhgag.doe";
const input6 = "https://www.linkedin.com/in/john.doe";
const input7 = "http://www.linkedin.com/in/yogh-doe-123a";

// Test the input against the regular expression and print the result
console.log(`${input1} is a valid LinkedIn profile URL: ${linkedinRegex.test(input1)}`);
console.log(`${input2} is a valid LinkedIn profile URL: ${linkedinRegex.test(input2)}`);
console.log(`${input3} is a valid LinkedIn profile URL: ${linkedinRegex.test(input3)}`);
console.log(`${input4} is a valid LinkedIn profile URL: ${linkedinRegex.test(input4)}`);
console.log(`${input5} is a valid LinkedIn profile URL: ${linkedinRegex.test(input5)}`);
console.log(`${input6} is a valid LinkedIn profile URL: ${linkedinRegex.test(input6)}`);
console.log(`${input7} is a valid LinkedIn profile URL: ${linkedinRegex.test(input7)}`);
