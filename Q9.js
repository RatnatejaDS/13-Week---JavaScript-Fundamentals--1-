// "You are given an array of numbers and strings. Your task is to find the first string in the array. Upon finding the first string, print 'Found the First String' along with its value."

// Define an array containing numbers and strings
const arr = [1, 2, 'test', 999, 56, 'Mithun', 1234, 'PW'];

// Use a for loop to iterate through the elements of the array
for (let index = 0; index < arr.length; index++) {
    // Check if the current element is of type 'string'
    if (typeof arr[index] === 'string') {
        // Print a message when the first string is found
        console.log(`Found the first string: ${arr[index]}`);
        break; // Exit the loop when the first string is found
    }
}
