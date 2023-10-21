const operator ={

    multi:function(a,b){

        return a*b;
     },

    add:function(a,b){

        return a+b;
     },
    sub:function(a,b){

         return a-b;
      },

       div:function(a,b){

         return a/b;
      }
};
console.log("",operator .add(10,2));
console.log("",operator .multi(10,2));
console.log("",operator .sub(10,2));
console.log("",operator .div(10,2));