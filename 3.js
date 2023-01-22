const numbers = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];
// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari kumpulan angka diatas dan sesuaikan kebutuhan parameternya


// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 67

function getMax(angka){
    let max =0;
 
    for(let i=0; i<angka.length;i++){
      if (max<angka[i]){
        max = angka[i]
      }  
    }
    return max 
}
console.log(`Nilai maksimum adalah ${getMax(numbers)}`)
