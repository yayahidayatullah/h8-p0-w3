function targetTerdekat(arr) {
    var posisiO = 0;
    var posisiX = [];
    for(var i =0 ; i < arr.length ;i++){
        if(arr[i] === 'o'){
            posisiO+= i;
        }else if(arr[i] === 'x'){
            posisiX.push(i);
        }
    }
    // console.log(posisiX);
    // return posisiO;
    
    if(posisiO < posisiX[0]){
        return posisiX[0] - posisiO
    }else if(posisiO > posisiX[0]){
        var angkaTerakhir = posisiX.length-1
        return posisiO - posisiX[angkaTerakhir]
    }else{
        return 0
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2