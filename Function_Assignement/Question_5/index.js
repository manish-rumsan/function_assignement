// Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'
// Function to find the first non-repeated character
function firstNonRepeatedCharacter(str) {
    const charCount = {}; // Object to store character counts

    // Loop through the string to count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1; // Increment count for each character
    }

    // Loop through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if all characters are repeated
}

// Example usage
let sampleString = 'abacddbec';
let result = firstNonRepeatedCharacter(sampleString);

console.log("First non-repeated character:", result);
