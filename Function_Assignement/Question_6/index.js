/*Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
 Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"*/
 // Function to find the longest country name
function longestCountryName(countries) {
    let longestName = ''; // Initialize a variable to store the longest country name

    // Loop through the array of country names
    for (let country of countries) {
        // Check if the current country name is longer than the longest found so far
        if (country.length > longestName.length) {
            longestName = country; // Update the longest name
        }
    }

    return longestName; // Return the longest country name
}

// Example usage
let countryList = ["Australia", "Germany", "United States of America"];
let result = longestCountryName(countryList);

console.log("Longest country name:", result);
