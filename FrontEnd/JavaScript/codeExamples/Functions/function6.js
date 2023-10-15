function mul(a) {

    return function (b) {

        return function (c) {
            
            return a * b * c;
        }
    }
}
mul(4)(5)(6);
console.log(mul(4)(5)(6));

//120