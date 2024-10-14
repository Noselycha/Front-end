// // //IIFE & Callback Function
// // // 1. IIFE (Immediately Invoked Function Expression)
// // // a. No params, args & return value
// // (function () {
// //     console.log("Hello World");
// // } )();

// // //b. with params, args & return value
// // let output = (function (fullName) {
// //     return "Hello " + fullName
// // } )("John Doe");
// // console.log(output);

// //callback function
// // a. No params, args & return value
// function sayHello (callback) {
//     callback();
// }

// sayHello (function (){
//     console.log("Hello World"); //callback function
// });

// // //b. with params, args & return value
// function sayHello (callback) {
//     let result = callback("John Doe");
//     console.log(result); 
// }

// sayHello (function (fullName){
//     return "Hello " + fullName; //callback function
// });
