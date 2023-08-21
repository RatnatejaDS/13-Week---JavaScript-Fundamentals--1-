// You are working on a currency conversion application. Write a program that has a variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR.

// Define the amount in Indian Rupees (INR)
var Value_INR = 850;

// Define the exchange rate: 1 USD = 82 INR
const exchangeRate = 1 / 82;

// Calculate the equivalent amount in US Dollars (USD) rounded to 2 decimal places
var Value_USD = (Value_INR * exchangeRate);

// Print the result with currency symbols
console.log(`${Value_INR} INR is ${Value_USD} USD`);
