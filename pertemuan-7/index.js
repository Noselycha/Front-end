// //array in JavaScript
// //deklarasi array
// //cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // cara 2. kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// //Tipe data yang bisa disimpat dalam array
// let numbers = [1, 2, 3, 4, 5]; //number
// let students =  ["John", "Jane", "Bob"]; //string
// let john = ["John", 38, true, [80, 90, 100]]; //mixed

// //Array length
// console.log(number.length); //5
// console.log(student.length); //4
// console.log(john.length); //3

// // Mengakses element/data terakhir dalam array
// console.log(numbers2[9])
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
// console.log(numbers2[numbers2.length[-1]]); //blm tatrus

//Array method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. join
console.log(array.join());
console.log(array.join(""));
console.log(array.join("-"));
console.log(array.join("#"));
//3. pop()
array.pop();
console.log(array);
//4. push()
array.push("Selamat Datang");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.unshift();
console.log(array);
//7. splice()
array.splice(2, 1); //hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);
//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice()
let sayuran = sayuran.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);
