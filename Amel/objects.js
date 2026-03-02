let person = {
    firstName: 'Mosh',
    age: 30
};

//Dot notation
person.firstName = 'John';

//Bracket Notation
person['firstName'] = 'Mary';

console.log(person.firstName); // Output: Mary