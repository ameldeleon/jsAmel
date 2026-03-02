
// Strict Equality | (Type + Value)
console.log (1===1); // true
console.log ('1'===1); // false

// Lose Equailty | Converts the operands to the same type before making the comparison
console.log(1==1); // true      |  
console.log('1'==1); // true    | Converts the string '1' to a number before comparing
console.log(true==1); // true   | Converts the boolean true to a number (1) before comparing