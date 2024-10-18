// Write a implicit js function that formats the number in following format. 10000 => 10,000 1000000 =>10,000,000
// Implicit function to format numbers with commas
let formatNumber = (number) => number.toLocaleString();

// Example usage
let number1 = 10000; // Input number
let number2 = 1000000; // Another input number
let number3 = 1000000000;

// Format and output the results
console.log(formatNumber(number1)); 
console.log(formatNumber(number2)); 
console.log(formatNumber(number3));
