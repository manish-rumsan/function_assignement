// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Check for factors from 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // If divisible by any number other than 1 or itself, it's not prime
        }
    }

    return true; // If no factors were found, it's prime
}

// Example usage with a parameterized function call
let number = 7; // You can change this number to test
let result = isPrime(number);

if (result) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
