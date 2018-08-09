function cariMean(arr) {
    //looping array,tambahkan hasil looping ke var jumlah
    var jumlah = 0;
    for(var i = 0; i < arr.length ;i++){
        jumlah += arr[i];
    }
    //hasil dibagi berapa isi dari array nya
    var hasil =jumlah/arr.length;
    //kembalikan hasil yang sudah dibulatkan(pakai Math.round() agar jika angka dibelakang koma >=5 dibulatkan keatas)
    return Math.round(hasil)
}
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7