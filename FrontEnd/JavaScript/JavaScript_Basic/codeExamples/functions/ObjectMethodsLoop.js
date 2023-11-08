 //Using Object Methods in a Loop
 let student = {
    name: "Alice",
    grades: [85, 92, 78, 90],
    calculateAverage: function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
      return sum / this.grades.length;
    }
  };
  
  console.log(student.name + "'s average grade is: " + student.calculateAverage());
  