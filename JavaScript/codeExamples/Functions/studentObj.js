//Creating a Student Object
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  
  const alice = new Student('Alice', 18, 'A');
  console.log(alice.age); // Output: 18
  