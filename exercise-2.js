function balikString(kata) {
    var hasil = '';
    for ( var i = kata.length-1 ; i >= 0 ; i-- ) {
      hasil += kata[i]
    }
    return hasil
}
console.log(balikString("hello world!"));//input "hello world!"