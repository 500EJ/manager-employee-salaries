const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  _totalSubSalary(employees = this.employees) {
    let sum = 0;
    for (let i = 0; i < employees.length; i++) {
      sum += employees[i].salary;
      if (employees[i] instanceof Manager) {
        sum += this._totalSubSalary(employees[i].employees);
      }
    }
    return sum;
  }
}

splinter = new Manager("Splinter", 100000, "Sensei");
leo = new Manager("Leonardo", 90000, "Ninja", splinter);
mikey = new Employee("Michelangelo", 85000, "Grasshopper", leo);

debugger;
splinter.calculateBonus(0.05);

module.exports = Manager;
