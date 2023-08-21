// You are building a simple login system Implement the login feature that has two variables: username and  password You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login successful" otherwise, print "Invalid credentials"

// Define the expected username and password
let expectedUsername = 'admin';
let expectedPassword = '12345';

// User-provided username and password (these could come from a form)
let providedUsername = 'admin'; // Replace with user input
let providedPassword = '12345'; // Replace with user input

// Check if the provided username and password match the expected values
if (providedUsername === expectedUsername && providedPassword === expectedPassword) {
    // If both conditions are true, print "Login successful"
    console.log("Login successful");
} else {
    // If the conditions are not met, print "Invalid credentials"
    console.log("Invalid credentials");
}
