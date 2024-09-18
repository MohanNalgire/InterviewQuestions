function mul(a) {
    console.log("inner level one", a);
    return function (b = 10) {
        console.log("inner level two", a, b);
        return function (c = 50) {
            console.log("inner level three", a, b, c);
            return a+b +c;
        }
    }
}
mul(4)(5)(6);