/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height = 7;

for (var i = 0 ; i < height ; i++) {
  var hasil  = '';
  for (var j = height ; j > 0 ; j--) {
    if (i % 2 == 0){
      hasil+='*';
    }else{
      hasil+='#';
    }
  }
  console.log(hasil)
}
// console.log(hasil)