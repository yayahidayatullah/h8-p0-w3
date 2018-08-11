function groupAnimals(animals) {
    //"LOOPING PERTAMA"
    //untuk mengelompokkan huruf depan yang sama(yang urutannya benar)
    //ditampung kedalam urut animals
    var urutAnimals2 = [];
    var penampung = [];
    for(var k = 0 ; k < animals.length ;k++){
        
        for(var l = k+1; l < animals.length; l++){
        if(animals[k][0] === animals[l][0]){
            penampung.push(animals[k]);
            penampung.push(animals[l]);
            urutAnimals2.push(penampung);
            penampung =[];
            }
        }
        
    }
    urutAnimals2.sort()
    //"LOOPING KEDUA"
    //untuk mengurutkan dan menampung hasil(tapi hasil urutannya masih salah)
    var urutAnimals = animals.sort();
    var hasil = [];//menampung hasil
    var group = [];//untuk menampung grup dengan awal huruf sama
    var abcd  = urutAnimals[0][0];//huf pertama
    
    for(var i = 0; i < urutAnimals.length ;i++){
        if(urutAnimals[i][0] === abcd){
            group.push(urutAnimals[i])//untuk memasukkan kata yang berawalan sama kedalam grup
        }else{
            hasil.push(group);//jika sudah tidak sama,masukkan group ke penampung hasil
            group = [];//reset kembali penampung grupnya
            abcd = urutAnimals[i][0];//ubah isi var abcd sesuai huruf awal yang selanjutnya
            group.push(urutAnimals[i]);//memasukkan kata dengan huruf awal selanjutnya ke grup untuk ditangkap if
        }
    }
    hasil.push(group);
    //"LOOPING KETIGA"
    //looping untuk mengganti hasil yang salah dari looping ke-2 digantikan hasil dari looping pertama 
    var pertambahan = 0;
    for(var m = 0; m < hasil.length ; m++){
        if(hasil[m].length === 2){
            hasil.splice(m,1,urutAnimals2[pertambahan])
            pertambahan+= 1;
        }
    }
    
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]