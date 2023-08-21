// You are developing a booking application for a cinema. The ticket price depends on the type of the viewer ('child,' 'adult,' or 'senior'). Write a program which calculates the price accordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, the adult ticket price is Rs. 150, and the ticket price for a senior is Rs. 120.

// Define ticket prices for different viewer types
const PriceChild = 100;   // Ticket price for a child
const PriceAdult = 150;   // Ticket price for an adult
const PriceSenior = 120;  // Ticket price for a senior

// Define the number of viewers for each category
let NumberOfChildren = 2;   // Number of child viewers
let NumberOfAdults = 1;     // Number of adult viewers
let NumberOfSeniors = 1;    // Number of senior viewers

// Calculate the total price by multiplying ticket price with the number of viewers in each category
const TotalPrice = (PriceChild * NumberOfChildren) + (PriceAdult * NumberOfAdults) + (PriceSenior * NumberOfSeniors);

// Print the total price with the currency symbol
console.log(`🎉 Hooray! You've Secured Your Movie Magic Pass 🍿 Total Bill Amount = ₹${TotalPrice}`);

