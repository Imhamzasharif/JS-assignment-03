// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your
// browser:

let main = 10;
document.write("The value of main is : 10 <hr>");

main = main++ +1;
document.write(`The value of ++main is; ${main}<br>`);
document.write(`Now. the value of main is; ${main}<br><br>`);

document.write(`The value of main++ is; ${main}<br>`);
main = main++ +1;

document.write(`Now The value of main is; ${main}<br><br>`);

main = --main
document.write(`The value of --main is; ${main}<br>`);
document.write(`Now The value of main is; ${main}<br><br>`);


document.write(`The value of main-- is; ${main}<br>`);
main = --main
document.write(`Now The value of main is; ${main}<br>`);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
document.write(`a is; ${a} <br>`);

var b = 2;
document.write(`a is; ${b} <br>`);

var finalAnswer = (--a - --b) + (++b + b--);
document.write(`Result is: ${finalAnswer}<br><br>`);



// 3. Write a program that takes input a name from user & greet the user.

let userName = prompt("Please enter your name:");

if(userName){
    document.write(`Hello, how have you been ${userName}?`);
}

else{
    document.write(`You will have to Enter your name for next time <br>`);
}

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.


// Take input from the user
let userInput = prompt("Enter a number for the multiplication table (default is 5):");

// Check if the input is valid; use 5 as the default if input is empty or not a number
let tableNumber = userInput && !isNaN(userInput) ? parseInt(userInput) : 5;

// Display the multiplication table on the browser
document.write(`<h2>Multiplication Table of ${tableNumber}</h2>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)



let Subject1 = prompt("Please Enter your First Subject Name");
let Subject2 = prompt("Please Enter your Second Subject Name");
let Subject3 = prompt("Please Enter your Third Subject Name");

const totalmarks = 100;

let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${"subject1"}`));
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${"subject2"}`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${"subject3"}`));

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalMarks = totalmarks* 3;
let percentage = (totalObtainedMarks / totalMarks) * 100;

document.write(Subject1, Subject2, Subject3, "<br>",  totalMarks, obtainedMarks1, obtainedMarks2, obtainedMarks3, "<br>", percentage );







