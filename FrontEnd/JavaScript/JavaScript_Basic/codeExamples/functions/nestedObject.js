
 // Nested Objects
const address = {
    street: " c1 Main St",
    city: "Anytown",
    state: "Maharashtra"
  };
 
  const personWithAddress = {
    firstName: "Ramesh",
    lastName: "Sumit",
    age: 25,
    address: address
  };
  
  console.log(address); 
  //street: ' c1 Main St', city: 'Anytown', state: 'Maharashtra' 
  
  console.log(personWithAddress);
  /*firstName: 'Ramesh',
    lastName: 'Sumit',
    age: 25,
    address: { street: ' c1 Main St', city: 'Anytown', state: 'Maharashtra' */
  

  const userinput = {
   userEmail: "mahadevmenkudle123@gai.com",
   age: "23",
  uuserName: "mahadev",
    useerlastname: "menkudle",
  Password: 7066774123 };
   const Info = {
       Addres: "karvenager",
      Rode:"karverode",
        LineNo:"no3",
        userinput:userinput
    
};
console.log(userinput);
console.log(Info);
/*{
  userEmail: 'mahadevmenkudle123@gai.com',
  age: '23',
  uuserName: 'mahadev',
  useerlastname: 'menkudle',
  Password: 7066774123
}
{
  Addres: 'karvenager',
  Rode: 'karverode',
  LineNo: 'no3',
  userinput: {
    userEmail: 'mahadevmenkudle123@gai.com',
    age: '23',
    uuserName: 'mahadev',
    useerlastname: 'menkudle',
    Password: 7066774123
  }
}
*/