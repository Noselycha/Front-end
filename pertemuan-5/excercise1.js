function menghitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
}

let berat = 50; 
let tinggi = 1.63; 

let bmi = menghitungBMI(berat, tinggi);
console.log("BMI anda adalah: " + bmi);
