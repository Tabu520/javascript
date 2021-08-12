function makeFunctionArray() {
    const arr = [];
    for(var i = 0; i < 5; i++) {
        arr.push(function () {console.log(i)});
    }
    console.log(i) // 5
    return arr;
}

const functionArr = makeFunctionArray();

// console.log(i); // undefined

functionArr[0]()