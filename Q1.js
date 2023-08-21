// Suppose you are building a payment checkout page and must display the final price after the discount. 
// Create a simple discount calculator that takes two values from the variables - the total cost and the 
// discount percentage - and prints the discounted value

// Define the initial values
let Value = 2000; // The actual value of the product in rupees
let DiscountPercentage = 20; // The discount percentage

// Declare variables to store the calculated values
let DiscountPrice, FinalPrice;

// Check if the discount percentage is valid
if (DiscountPercentage == 0 || DiscountPercentage > 100) {
    console.log("Error in Discount Percentage, Try Again");
} else {
    // Calculate the discount amount in rupees
    DiscountPrice = (Value * DiscountPercentage) / 100;

    // Calculate the final price after the discount in rupees
    FinalPrice = Value - DiscountPrice;

    // Display the results with rupee symbols
    console.log(`The Actual value of the product is ₹${Value}`);
    console.log(`Your Price = ₹${FinalPrice}`);
    console.log(`Congratulations, you saved ₹${DiscountPrice} `);
}

