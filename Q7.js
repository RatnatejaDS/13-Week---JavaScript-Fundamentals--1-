// "You are building a simple shopping list app. You have the item names in an array. Write a program that uses a for loop to print all the items in the shopping list array."

// Define an array with item names for the shopping list
const shoppingList = ["Apples", "Bananas", "Bread", "Milk", "Eggs"];

// Use a for loop to iterate through the shoppingList array
for (let index = 0; index < shoppingList.length; index++) {
    // Access the current item in the array using the index
    const element = shoppingList[index];
    
    // Print the current item to the console
    console.log(element);
}
