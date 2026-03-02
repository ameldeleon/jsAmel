// for (Expression 1; Expression 2; Expression 3) {
//     // code block to be executed
// }

// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.

for (let i = 1 ; i <= 5; i++) {
    console.log('Hello World', i);
}

// for (let i = 1; i <= 5; i++) {
//     if (i % 2 != 0) console.log(i);
// }

for (let i = 5; i >= 1; i--) {
    if (i % 2 != 0) console.log(i);
}