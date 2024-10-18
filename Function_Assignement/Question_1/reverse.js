// Function to reverse a number without converting to string
function reverseNumber(num) {
    let reversed = 0;

    while (num > 0) {
        let lastDigit = num % 10; // Get the last digit
        reversed = reversed * 10 + lastDigit; // Append the last digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the original number
    }

    return reversed;
}

let x = 32243;
let result = reverseNumber(x);

console.log("Reversed number:", result);
