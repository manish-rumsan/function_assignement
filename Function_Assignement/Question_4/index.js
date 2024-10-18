// Write a JavaScript function to get the number of occurrences of each letter in a specified string.
// Function to count occurrences of each letter in a string
function countLetterOccurrences(str) {
    const letterCount = {}; // Object to store letter counts

    // Loop through each character in the string
    for (let char of str) {
        // Convert to lowercase to make the count case-insensitive
        char = char.toLowerCase();
        
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            // If the letter is already in the object, increment its count
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                // Otherwise, initialize the count for this letter
                letterCount[char] = 1;
            }
        }
    }

    return letterCount; // Return the object containing letter counts
}

// Example usage
let exampleString = 'The quick brown fox jumps over the lazy dog';
let result = countLetterOccurrences(exampleString);

console.log("Letter occurrences:", result);
