// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

const Student = function ({ name, surname, grades }) {
  this.name = name;
  this.surname = surname;
  this.grades = [];
};

Student.prototype.addGrades = function (grade) {
  return this.grades.push(grade);
};
Student.prototype.calculate = function () {
  const sum = this.grades.reduce((acc, value) => acc + value, 0);
  return sum / this.grades.length;
};

const student1 = new Student ({ name: "Alice", surname: "Cooper" });
student1.addGrades(80);
student1.addGrades(90);
student1.addGrades(100);

const student2 = new Student({ name: "Steven", surname: "Tyler" });
student2.addGrades(50);
student2.addGrades(75);
student2.addGrades(97);

console.log(student1);
console.log(student1.calculate());
console.log(student2.calculate());

function showInfo() {
  return `Середній бал студнта ${this.name} ${
    this.surname
  }: ${this.calculate()}`;
}
console.log(showInfo.call(student1));
console.log(showInfo.call(student2));
