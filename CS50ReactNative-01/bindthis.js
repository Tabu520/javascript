var a = {
    name: 'Tai',
    run: function () {
        var run2 = function () {
            console.log(this.name);
        }
        run2();
    }
}
a.run();

// có 4 cách để biến this trong hàm run 2 thành object a
// 1. run2.bind(this)()
var b = {
    name: 'Tai2',
    run: function() {
        var run2 = function () {
            console.log(this.name);
        }
        run2.bind(this)()
    }
}
b.run()
// 2. run2.bind(a)()
var c = {
    name: 'Tai3',
    run: function() {
        var run2 = function () {
            console.log(this.name);
        }
        run2.bind(c)()
    }
}
c.run()
// 3. bind(this)/bind(a) tại function
var d = {
    name: 'Tai4',
    run: function() {
        var run2 = function () {
            console.log(this.name);
        }.bind(d) // bind(this)
        run2()
    }
}
d.run()
// 4. biến function thành arrow function
var e = {
    name: 'Tai5',
    run: function() {
        var run2 = () => {
            console.log(this.name);
        }
        run2()
    }
}
e.run()



