// 1. Buatlah sebuah variabel dengan nama "animals"

// 2. Isi variable tersebut dengan array yang memiliki 3 elemen string "kucing", "domba", "kuda"

// 3. Cetak element array pertama ("kucing")

// 4. Cetak element array ketiga ("kuda")

// 5. Ganti element ketiga dari array menjadi "kelinci"

// 6. Cetak element array ketiga ("kelinci")

// 7. Gunakan property length untuk mencetak jumlah element di array

// 8. Gunakan loop for untuk mencetak nilai animals di console secara berurutan
// output:
// kucing
// domba
// kuda

let animals =["kucing","domba","kuda"]

console.log(animals[0]);
console.log(animals[2]);
animals.push("kelinci");
console.log(animals[3]);
console.log(animals.length);

for(let i = 0; i < animals.length; i++)
console.log(animals[i]);