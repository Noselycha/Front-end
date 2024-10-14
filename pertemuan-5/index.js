// //JavaScript Function
// // Cara 1. Function Declaration
// function greetings() {
//     console.log("Hello World");
// }

// greetings1(); //call / execute function

// // cara 2. Function Expression
// let greetings2 = function() {
//     console.log("Hello World");
// };
// greetings2();

// // Parameter & Argument (input), return (output)
// // cara 1.
// //              parameter
// function greetings1(fullName) {
//     return "Hello " + fullName;
// }
// //              argument
// greetings1("John Doe");
// console.log(output);

// // cara 2.
// let greetings2 = function (fullName) {
//     return "Hello " + fullName;
// }
// let output2 = greetings2("John Doe");
// console.log(output2);


// //Function Hoisting
// //          argument
// let output1


// //Global Scope & Local Scope
// let x = 10; //global
// function foo() {
//     console.log(x); //10
// }

// //2
// let x = 10; //global
// function foo() {
//     let y = 20; //Local
//     console.log(x); //10
//     console.log(y); //20
//     if (y > 10) {
//         let z = 30
//     }
// }

// // if else dll yg ada {} adalah bloc