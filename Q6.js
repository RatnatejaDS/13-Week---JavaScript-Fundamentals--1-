
// "You are developing a form validation system. Write a program that takes user information (such as name, email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like 'Name should be a string,' 'Email should be a string,' or 'Age should be a number' if any field is not proper."


let username = "Mithun";
let email = "Mithunsp@pw.live";
let age = 21;

// Check if username is a string
if (typeof username === 'string') {
    // Check if age is a number
    if (typeof age === 'number') {
        // Check if email is a valid email address
        if (email.indexOf('@') !== -1 && email.indexOf('@') === email.lastIndexOf('@')) {
            // Check if there is at least one "." after the "@" symbol
            const afterAt = email.split('@')[1];
            if (afterAt.indexOf('.') !== -1) {
                console.log("Validation Success!!");
            } else {
                console.log("Enter a valid email address!!");
            }
        } else {
            console.log("Enter a valid email address!!");
        }
    } else {
        console.log('Age should be a number');
    }
} else {
    console.log('Username should be a string');
}
