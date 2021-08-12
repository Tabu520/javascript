const a = [3, 1, 2];
const b = [1, 2, 3];

function f1(arr) {
    return arr[0];
}

function f2(arr) {
    return arr.sort();
}

// var c = [].concat(b, 4); 
// var c = [4].concat(b);
// var c = [...b, 4];
// var c = b.slice();
// c.push(4);
var c = [...b.slice(0, 2), 4, ...b.slice(2)];

function main() {
    // f2(a);
    // var b = f1(a);
    // console.log(b)

    console.log(c);
    console.log(b);
}

// main();


var obj = {
    name: 'Minh',
    gfs: ['Trang', 'Yen']
}

// var obj2 = Object.assign({}, obj);
// var obj2 = {...obj, name: 'Dat'}; // shallow copy
var obj2 = {...obj, name: 'Tuan', gfs: [...obj.gfs, 'Linh']};
// obj2.name = 'Cuong';
console.log(obj);
console.log(obj2);
