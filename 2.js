/*
Untuk soal nomor 2, dilarang menjalankan kode di code editor. Kalian hanya boleh membaca dan menganalisa apa output dari sintaks berikut

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

let arr = [];
let numbers = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];

for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
        arr.push(numbers[i]);
    }
}
console.log(arr);
*/

// Jawaban :
[1,2,1,67]