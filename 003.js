/*

 Graduat Students
----------------------
Implementasikan function graduate students yang akan menerima input multidimensional array
berupa data nama student beserta nilainya, dan akan mengembalikan nilai berupa
array of object dengan attribut object nama student, values, dan award

rules:
  1. Jika rata-rata nilai lebih besar dari 99 maka student akan mendapat award instructor
  2. Jika rata-rata nilai lebih besar dari 89 maka student akan mendapat award honour
  3. Jika rata-rata nilai lebih besar dari 79 maka student akan mendapat award graduate
  4. Selain dari itu akan lulus dengan award participant
  5. Jika data berupa array kosong maka akan mengembalikan array kosong juga

Contoh:
- input: [
    ['Foo', 100, 110, 120],
    ['Foobar', 90, 90, 95],
    ['Anton', 82, 82, 87],
    ['Emil', 70, 72, 75]
  ]
- output: 
  [ 
    { name: 'Foo', values: [ 100, 110, 120 ], award: 'instructor' },
    { name: 'Foobar', values: [ 90, 90, 95 ], award: 'honour' },
    { name: 'Anton', values: [ 82, 82, 87 ], award: 'graduate' },
    { name: 'Emil', values: [ 70, 72, 75 ], award: 'participant' } 
  ]

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
Dilarang menggunakan Regex (.match, .test, dan sebagainya)

 */

function graduateStudents(data) {
  // Put your code here
  //let data = [['Antonio', 100, 80, 95], ['Emilia', 82, 90, 89]];
  let nilaiAvg = 0;
  let sumNilai = 0;
  let nilai = [];

  let DisplayObjek = [];
  for (let i = 0; i < data.length; i++) {
    let Objek = {};
    for (let j = 1; j < data[i].length; j++) {
      //console.log(data[i][j]);
      nilai.push(data[i][j]);
      sumNilai = sumNilai + data[i][j];
      Objek.name = data[i][0];
    }
    //console.log(`sumnilai ${sumNilai}`)
    nilaiAvg = sumNilai / nilai.length;
    //console.log(`nilaiAvg ${nilaiAvg}`)
    if (nilaiAvg > 99) {
      Objek.award = "instructor"
    }
    else if (nilaiAvg > 89) {
      Objek.award = "honour"
    }
    else if (nilaiAvg > 79) {
      Objek.award = "graduate"
    }
    else {
      Objek.award = "participant"
    }
    Objek.values = nilai;
    //console.log(Objek);
    DisplayObjek.push(Objek);
    //console.log(DisplayObjek);
  }
  return DisplayObjek;
  //console.log(nilai);
}

console.log(graduateStudents([
  ['Antonio', 100, 80, 95],
  ['Emilia', 82, 90, 89]
]));
/*
  [ 
    { name: 'Antonio', values: [ 100, 80, 95 ], award: 'honour' },
    { name: 'Emilia', values: [ 82, 90, 89 ], award: 'graduate' } 
  ]
*/

// console.log(graduateStudents([
//   ['Antonio', 70, 75, 72],
//   ['Banderaz', 100, 110, 98],
//   ['Ceicil', 90, 90, 92],
//   ['Dominique', 70, 72, 75],
//   ['Emilia', 80, 82, 70]
// ]));

/*

  [ 
    { name: 'Antonio', values: [ 70, 75, 72 ], award: 'participant' },
    { name: 'Banderaz',
      values: [ 100, 110, 98 ],
      award: 'instructor' },
    { name: 'Ceicil', values: [ 90, 90, 92 ], award: 'honour' },
    { name: 'Dominique',
      values: [ 70, 72, 75 ],
      award: 'participant' },
    { name: 'Emilia', values: [ 80, 82, 70 ], award: 'participant' } 
  ]
*/

//console.log(graduateStudents([])); // '[]'
