false || true; // true
false || 'Mosh'; // 'Mosh' (non-boolean values are treated as truthy if they are not falsy)
false || 1 || 1; // 1 (returns the first truthy value)

//Falsy (false, 0, '', null, undefined, NaN) <- Using any of this values they will be treated as false when evaluated in a boolean context
//Truthy (true, ' ', [], {}, 42, 'false') <- Using any of this values they will be treated as true when evaluated in a boolean context

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // red (returns the first truthy value)

console.log(currentColor);