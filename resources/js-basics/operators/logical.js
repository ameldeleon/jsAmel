
// logical AND (&&) | Returns true if both operands are true
// logical OR (||) | Returns true if at least one operand is true
// logical NOT (!) | Returns true if the operand is false, and false if the operand is true

// true && true => true | BOTH OPERANDS MUST BE TRUE

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; // true

console.log(eligibleForLoan);

// true || true => true | AT LEAST ONE OPERAND MUST BE TRUE

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let highIncome2 = true;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2; // true

console.log(eligibleForLoan2);