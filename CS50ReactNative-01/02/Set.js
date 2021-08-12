class Set {
    constructor(arr) {
        this.arr = arr;
    }
    
    add(val) {
        if(!this.has(val)) this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }
}

const s = new Set([1, 2, 3, 4, 5, 6]);

console.log(s.has(1))
console.log(s.add(1))
console.log(s.size)
