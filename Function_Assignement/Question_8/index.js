// Write a function to calculate compound interest based on the principle amount
// Function to calculate compound interest
function calculateCompoundInterest(principal, rate, time, compoundingFrequency) {
    // Convert the interest rate from percentage to decimal
    let r = rate / 100; 
    // Calculate the amount using the compound interest formula
    let amount = principal * Math.pow((1 + r / compoundingFrequency), (compoundingFrequency * time));
    // Calculate the compound interest
    let compoundInterest = amount - principal; // Total amount minus principal

    return {
        totalAmount: amount.toFixed(2), // Total amount after interest
        compoundInterest: compoundInterest.toFixed(2) // Compound interest
    };
}

// Example usage
let principalAmount = 1000; // Principal amount
let annualRate = 5; // Annual interest rate in percentage
let timeInYears = 10; // Time in years
let timesCompounded = 4; // Interest is compounded quarterly

let result = calculateCompoundInterest(principalAmount, annualRate, timeInYears, timesCompounded);

console.log("Total Amount after " + timeInYears + " years: $" + result.totalAmount);
console.log("Compound Interest earned: $" + result.compoundInterest);
