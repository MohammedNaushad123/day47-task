//1
class Hospital {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  displayDetails() {
    console.log("Hospital Name is :", this.name);
    console.log("City is :", this.city);
  }
}

class Doctor extends Hospital {
  constructor(name, city, specialization) {
    super(name, city);
    this.specialization = specialization;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Specialization is :", this.specialization);
  }
}

let d = new Doctor("Apollo Hospital", "Hyderabad", "Cardiologist");
d.displayDetails();

//2
class Bank {
  constructor(bankName, city) {
    this.bankName = bankName;
    this.city = city;
  }

  displayDetails() {
    console.log("Bank Name is :", this.bankName);
    console.log("City is :", this.city);
  }
}

class Customer extends Bank {
  constructor(bankName, city, customerName, balance) {
    super(bankName, city);
    this.customerName = customerName;
    this.balance = balance;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Customer Name is :", this.customerName);
    console.log("Balance is :", this.balance);
  }
}

let customer = new Customer("SBI", "Hyderabad", "Rahul", 50000);
customer.displayDetails();

//3
class Company {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  displayDetails() {
    console.log("Company Name is :", this.name);
    console.log("Location is :", this.location);
  }
}

class Manager extends Company {
  constructor(name, location, department, salary) {
    super(name, location);
    this.department = department;
    this.salary = salary;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Department is :", this.department);
    console.log("Salary is :", this.salary);
  }
}

let m = new Manager("TCS", "Hyderabad", "Development", 75000);
m.displayDetails();