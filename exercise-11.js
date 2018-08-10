function tentukanDeretAritmatika(arr) {
    var hasilBagi =[];
    var hasilFalse = 0;
    for(var i = 0 ; i < arr.length-1 ; i++) {
        hasilBagi.push(arr[i+1]-arr[i]);
    }
    for(var j = 0 ; j < hasilBagi.length-1 ;j++){
        if(hasilBagi[j]  !== hasilBagi[j+1]){
            hasilFalse += 1
        }
    }
    if(hasilFalse === 0){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false