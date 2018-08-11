function groupAnimals(animals) {
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
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]