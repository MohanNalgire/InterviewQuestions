function add(a){
    return function(b){
        return a+b;
    }
}
add(4)(5);

//  9