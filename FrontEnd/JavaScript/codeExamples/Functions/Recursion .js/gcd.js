let gcd= function(a,b){
    if (! b){
        return a;
    }
    return gcd(b, a%b);
};
console.log(gcd(4213, 321));

