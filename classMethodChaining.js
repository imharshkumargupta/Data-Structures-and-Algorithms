//https://www.youtube.com/watch?v=8x1fygdWabY&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=7

class Student {
  constructor(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  updateScore() {
    this.score++;
    return this;
  }
}

const student1 = new Student("Harsh", 21, 10);
console.log(student1);
student1.updateScore().updateScore(); //important
console.log(student1);
