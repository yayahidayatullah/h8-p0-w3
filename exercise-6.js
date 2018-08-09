function angkaPalindrome(num) {
    // looping dimulai dari angka yang dipilih
    // looping berhenti saat menemukan angka yang didapat sama jika dibalik   
    for(var i = num; i != hasil; i++){
        num++
        var numString = String(num);
        var hasil = '';
        for ( var j = numString.length-1 ; j >= 0 ; j-- ) {
          hasil += numString[j];
        }
        //Membandingkan hasil
        if( hasil === numString ){
          return num;
        }
    }
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001