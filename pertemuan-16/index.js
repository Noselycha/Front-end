//Asynchronous JS

//Synchronous -> single thread
console.log("proses 1");
console.log("proses 2");
console.log("proses 3");

//Asynchronous -> multi thread -> blocking
// 1. Paralel
// setTimeout(() => {
//   console.log("proses 1");
// }, 3000);
// console.log("proses 2");
// setTimeout(() => {
//   console.log("proses 3");
// }, 5000);
// console.log("proses 4");

// 2. Concurrency
// setTimeout(() => {
//   console.log("proses 1");
//   setTimeout(() => {
//     console.log("proses 2");
//     setTimeout(() => {
//       console.log("proses 3");
//       setTimeout(() => {
//         console.log("proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//promise
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//cara pakai promise
//1. then - catch
newPromise.then((result) => result).catch((error) => console.log(error));

//2. Async - Await
//Harus dibuaat dalam fungsi
const consumePromise =  

//pakai promise yang sudah ada
//1. fetch
fetsh("")
    .then((response) => response.json())
    .then((json) => console.log(json));

(async ())