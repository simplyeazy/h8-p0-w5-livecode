/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .concat()
- .indexOf() / .lastIndexOf() / .includes() / findIndex
- .copyWithin()
*/


function arrayMerge(firstData, secondData) {
  // Code disini
  let bufferArray = [];
  for (let i = 0; i < firstData.length; i++) {
    //console.log(firstData[i]);
    bufferArray.push(firstData[i]);
  }
  for (let j = 0; j < secondData.length; j++) {
    //console.log(secondData[j]);
    bufferArray.push(secondData[j]);
  }
  for (let i = 0; i < bufferArray.length; i++) {

  }
  function eliminateDuplicates(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};
    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
  return eliminateDuplicates(bufferArray);
  // for (let k = 0; k < bufferArray.length; k++) {
  //   for (let l = 0; l < bufferArray.length; l++) {
  //     if (bufferArray[k] === bufferArray[l]) {
  //       console.log(bufferArray[k]);
  //     }
  //   }
  // }

  //return bufferArray;
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []