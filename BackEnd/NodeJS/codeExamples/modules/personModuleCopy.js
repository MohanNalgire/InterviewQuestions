// commonJS module export 
module.exports = {
    person:{
        name: 'Mohan',
        role: 'developer'
    },
    printName: function(){
        console.log(this.person.name);
    }
    ,
    printRole: function() {
        console.log(this.person.role);
    }
};
/*
var a; // declaration of variable or Initializaiton of variable by var, let, const 
a =10 ;// assignement of variable

*/