// 1. IIFE (Immediately Invoked Function Expression)
let bmi = (function (berat, tinggi) {
    return berat / (tinggi * tinggi);
})(50, 163/100); 

console.log("BMI Anda adalah: " + bmi);


// 2. callback function
function hitungBMI(callback) {
    let berat = 50; 
    let tinggi = 163/100; 
    let bmi = callback(berat, tinggi);
    console.log("BMI Anda adalah: " + bmi);
}

hitungBMI(function (berat, tinggi) {
    return berat / (tinggi * tinggi);
});
