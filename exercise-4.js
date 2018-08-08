var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(input) {
    //Menggunakan 'splice'
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1,  "Pria", "SMA Internasional Metro");
    console.log(input);
    
    //Menggunakan 'split'
    var inputTtl = input[3].split('/');
    //'switch case' untuk merubah angka bulan menja di kata
    switch (inputTtl[1]) {
        case '01': console.log('Januari');break;
        case '02': console.log('Februari');break;
        case '03': console.log('Maret');break;
        case '04': console.log('April');break;
        case '05': console.log('Mei');break;
        case '06': console.log('Juni');break;
        case '07': console.log('Juli');break;
        case '08': console.log('Agustus');break;
        case '09': console.log('September');break;
        case '10': console.log('Oktober');break;
        case '11': console.log('November');break;
        case '12': console.log('Desember');break;        
    }
    //Menggunakan 'sort' descending
    console.log(inputTtl.sort(function(value1, value2) { return value2 - value1 }));

    //Menggunakan 'join'
    var ttlJoin = input[3].split('/');
    console.log(ttlJoin.join('-'))

    //Menggunakan 'slice'
    var namaSlice = input[1].slice(0,15);
    console.log(namaSlice)
}
