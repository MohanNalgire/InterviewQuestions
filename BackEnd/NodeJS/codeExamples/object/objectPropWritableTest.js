let user = {
    first_name: "Ram"
};
/*
1. Directly into object
{
  first_name: "Ram"
}
2. external with chanining
object.property_name
ex: user.first_name ="Ram"
3. expternal with array style
object['first_name'] = value
ex: user['first_name'] = "Ram"
4. Object.defineProperty()

5. Object.defineProperties()
*/
const descriptor1 = Object.getOwnPropertyDescriptor(user, 'first_name');
console.log('descriptor1 => ', descriptor1);
Object.defineProperty(
    user,
    "last_name",
    {
        value: 'Patil',
        writable:false,
        enumberable:false, // to check output on nodejs enumberable value must be true
        configurable:false
    }
);
console.log('test on user => ', user);
const descriptor2 = Object.getOwnPropertyDescriptor(user, 'last_name');
console.log('user object descriptor =>', descriptor2);
