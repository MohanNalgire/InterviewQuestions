function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person("Ram", 30);
  console.log(person1);
  //Output:Person { name: 'Ram', age: 30 }