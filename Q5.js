// Define the variable PackageType to hold the type of package (e.g., 'standard', 'express', 'overnight')
let PackageType = 'overnight'; // You may want to initialize PackageType with a value

// Use a switch statement to handle different package types
switch (PackageType) {
    case "standard":
        // If the package type is 'standard', provide an estimated delivery time message
        console.log('Your package will reach you in 3-5 Days');
        break;

    case "express":
        // If the package type is 'express', provide an estimated delivery time message
        console.log('Your package will reach you in 1-2 Days');
        break;

    case "overnight":
        // If the package type is 'overnight', provide an estimated delivery time message
        console.log('Your package will reach you by tomorrow');
        break;

    default:
        // Handle unexpected input or errors
        console.log("Unexpected Error Occurred, we will get back to you soon");
        break;
}
