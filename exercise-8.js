function pasanganTerbesar(num) {
    //ubah angka menjadi string
    //looping dan masukkan hasilnya ke variabel baru dan jadikan array(tambahkan angka sesudahnya)
    var numString = String(num);
    var hasil = [];
    for(var i = 0; i < numString.length-1; i++){
        hasil[i] = Number(numString[i] + numString[i + 1]);
    }
    //loping untuk mendapatkan angka terbesar
    var numTerbesar = hasil[0];
    for (var j = 0; j < hasil.length; j++){
        if(hasil[j] > numTerbesar){
            numTerbesar = hasil[j];
        }
    }
    return numTerbesar;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99