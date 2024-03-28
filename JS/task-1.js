// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

const Calculator = function ({ a, b }) {
  this.a = a;
  this.b = b;
};

Calculator.prototype.add = function () {
  return this.a + this.b;
};
Calculator.prototype.subtract = function () {
  return this.a - this.b;
};
Calculator.prototype.multiply = function () {
  return this.a * this.b;
};
Calculator.prototype.divide = function () {
  return this.a / this.b;
};

const calc = new Calculator({ a: 10, b: 5 });

console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());
