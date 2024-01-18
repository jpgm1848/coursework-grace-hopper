// A string will be created with the user string.
// The three variables will be created
// An alert with the welcome message concatenated with the numbers will be created.

let welcome =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Each variable has a different operation

let numOne = 5 + 5; //equals 10
let numTwo = 50 - 10; // equals 40
let numThree = 13 * 3; //equals 39

//A console.log is created to verify that the message is printing out correctly.
//It should only appear in the console and not the alert message.

console.log(`${welcome} ${numOne} - ${numTwo} - ${numThree}`);

// An alert message is created concatenating the message with the numbers.

alert(`${welcome} ${numOne} - ${numTwo} - ${numThree}`);
