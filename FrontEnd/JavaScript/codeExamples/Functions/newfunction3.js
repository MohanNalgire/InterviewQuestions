function mul(a) {
    console.log("inner level one", a);
    return function (b = 10) {
        console.log("inner level two", a, b); {
            return a*b;
        }
    }
}
mul(4)(5);
