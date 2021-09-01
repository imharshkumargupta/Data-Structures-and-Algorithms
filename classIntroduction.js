class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  statement() {
    console.log(
      `The student's name is ${this.name} and he is ${this.age} years old.`
    );
  }
}

const student1 = new Student("Harsh", 21);
console.log(student1);

const student2 = new Student("Beena", "Young");
console.log(student2);

console.log(student1.name);
student1.statement();
