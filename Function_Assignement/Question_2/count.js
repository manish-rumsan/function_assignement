/*Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.'
Example string : 'The quick brown fox' Expected Output : 5*/
// Function to count the number of vowels in a string
function countVowels(str) {
  // Define a string with all vowels (both lowercase and uppercase)
  let vowels = "aeiouAEIOU";
  let count = 0;

  // Loop through each character in the string
  for (let char of str) {
    if (vowels.includes(char)) {
      count++; // Increment the count if the character is a vowel
    }
  }

  return count; // Return the total number of vowels
}

// Example usage
let sentence = "The quick brown fox";
let result = countVowels(sentence);

console.log("Number of vowels in the string:", result);
