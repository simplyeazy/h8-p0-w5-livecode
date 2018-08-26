/**
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode atau algorithma / pseudocode atau algorithma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/


/*Pseudocode
DECLARE bufferEven, bufferOdd, totalEven, totalOdd, bufferDisplay
LOOP arrNum FROM index 0 to last index of arrNum increment counter by 1
    IF arrNum[i] mod 2 equals 0
        push arrNum[i] to bufferEven
    ELSE IF arrNum[i] mod 2 not equal 0
        push arrNum[i] to bufferOdd
LOOP bufferEven FROM index 0 to last index of bufferEven, increment counter by 1
    Sum each bufferEven element to totalEven
LOOP bufferOdd FROM index 0 to last index of bufferOdd, increment counter by 1
    Sum each bufferOdd element to totalOdd
PUSH array of totalOdd and totalEven to bufferDisplay
RETURN bufferDisplay
*/
function addEvenOdd(arrNum) {
    let bufferEven = [];
    let totalEven = 0;
    let bufferOdd = [];
    let totalOdd = 0;
    let bufferDisplay = [];
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            bufferEven.push(arrNum[i]);
        }
        else if (arrNum[i] % 2 !== 0) {
            bufferOdd.push(arrNum[i]);
        }
    }
    for (let i = 0; i < bufferEven.length; i++) {
        totalEven = totalEven + bufferEven[i];
    }
    for (let i = 0; i < bufferOdd.length; i++) {
        totalOdd = totalOdd + bufferOdd[i];
    }
    bufferDisplay.push([totalOdd], [totalEven]);
    return bufferDisplay;
}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

//console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

//console.log(addEvenOdd([])); // [ [0], [0] ]
