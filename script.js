/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  };
}

var calc = new Calculator();

console.log(calc.sum(5, 3));
console.log(calc.subtraction(5, 3));
console.log(calc.multiplication(5, 3));
console.log(calc.division(6, 3));
console.log(calc.division(6, 0));
