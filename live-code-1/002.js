/**
---------------------
First Letter Grouping
---------------------
Buatlah sebuah fungsi yang menerima input nama dan akan mereturn atau mengembalikan
nilai group manakah nama tersebut, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka akan mengembalikan nilai 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka akan mengembalikan nilai 'Masuk group kedua'
- Selain itu akan mengembalikan nilai 'Masuk group terakhir'
Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group terakhir'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'
- `name` = 'foobar', output: 'Masuk group kedua'
*/


// Code disini
function firstLetterGrouping (name) {
    switch (name[0]) {
        case 'a': return 'Masuk group pertama';
            break;
        case 'b': return 'Masuk group pertama';
            break;
        case 'c': return 'Masuk group pertama';
            break;
        case 'd': return 'Masuk group pertama';
            break; 
        case 'e': return 'Masuk group kedua';
            break;
        case 'f': return 'Masuk group kedua';
            break;     
        case 'g': return 'Masuk group kedua';
            break;
        case 'h': return 'Masuk group kedua';
            break;     
        default:  return 'Masuk group terakhir';
            break;
    }

}

console.log(firstLetterGrouping('rama')) // Masuk group terakhir
console.log(firstLetterGrouping('awtian')) // Masuk group pertama
console.log(firstLetterGrouping('foobar')) // Masuk group kedua
