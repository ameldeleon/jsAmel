// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 100;
let type = points > 100 ? 'gold': 'silver';
console.log(type); // gold

// let type =                           |declaring the variable
// points > 100                         |the condition we want to evaluate
// ? 'gold':                            |if the condition is true, then GOLD
// 'silver'; is the ternary operator    |if the condition is false, then SILVER