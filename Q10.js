// "You are given an array of numbers, both positive and negative. Your task is to print only the positive numbers."

// Define an array containing both positive and negative numbers
let arr = [1, 2, -3, 5, -9, -8, -7, 7];

// Use a for loop to iterate through the elements of the array
for (let index = 0; index < arr.length; index++) {
    // Check if the current element is greater than 0 (positive)
    if (arr[index] > 0) {
        // Print the positive number
        console.log(arr[index]);
    }
}
