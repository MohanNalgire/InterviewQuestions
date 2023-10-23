class user{
    constructor(email,password){
    this.email=email
    this.password=password
}
get password(){
    return this._password.toUpperCase()
}
set password(value){
    this._password=value.toUpperCase()
}
}

const mahadev=new user("ma@hadev.md","abc")
console.log(mahadev.password);
    


