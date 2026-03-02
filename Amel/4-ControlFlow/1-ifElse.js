// Hour
// If our is bertween 6am and 12pm: "Good morning!"
// If our hour is between 12pm and 6pm: "Good afternoon!"
// Otherwise: "Good evening!"

// if(condition) {
//     // code to run if condition is true
// } else if (condition) {
//     // code to run if previous condition is false and this condition is true
// } else {
//     // code to run if all previous conditions are false
// }

let hour = 22;

if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}