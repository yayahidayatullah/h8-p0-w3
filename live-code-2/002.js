/*
===================
Jumlah Huruf Vocal
===================
[INSTRUCTIONS]

SumVocal adalah sebuah function yang menerima satu parameter berupa array of string.
function akan mereturn sebuah nilai jumlah dari huruf vocal yang ada di array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Dilarang menggunakan sintaks .split()! .findIndex .indexOf .filter .map
- Dilarang menggunakan regex .match, .replace dan lainnya!
- Asumsi input selalu upper case atau huruf besar
- Jika tidak ada huruf vocal maka function akan mengembalikan nilai -1
[EXAMPLE]
SumVocal('ABCDEFG')

output: 2
*/

function SumVocal(array) {
  var hurufFokal = 'AIUEO';
  var hasil = 0;
  for(var i = 0 ; i < hurufFokal.length ; i++){
    for(var j = 0; j < array.length ;j++){
      if(hurufFokal[i] === array[j] ){
        hasil++
      }
    }
  }
  if(hasil === 0){
    hasil = -1;
  }
  return hasil
}

console.log(SumVocal('AIUEO')); // 5
console.log(SumVocal('HACKTIV8')); // 2
console.log(SumVocal('JAKARTA')); // 3
console.log(SumVocal('QWRTYP')); // -1
