var x = [0, 1, 2, 3];

function addOne(num) {
    return num + 1;
}

function isGreaterThanOne(num) {
    return num > 1;
}

function sum(a, b) {
    return a + b;
}

var y = x.map(addOne);
console.log(y);
var z = x.filter(isGreaterThanOne);
console.log(z);
var c = x.reduce(sum);
console.log(c);
