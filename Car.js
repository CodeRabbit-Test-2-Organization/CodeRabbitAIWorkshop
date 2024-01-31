// Class representing a simple calculator
class Calculator {
  // Constructor to initialize the calculator
  constructor() {
    this.result = 0;
  }

  // Function to add a number to the result
  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  // Function to multiply the result by a number
  multiply(number) {
    this.result *= number;
  }

  // Function to divide the result by a number
  divide(number) {
    // Intentional error: Division by zero
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }

    this.result /= number;
  }

  getResult() {
    return this.result;
  }
}

// Function to perform some calculations using the calculator
function performCalculations() {
  // Create a new calculator
  const calculator = new Calculator();

  // Add numbers
  calculator.add(5);
  calculator.subtract(2);
  calculator.multiply(3);
  calculator.divide(2);

  // Get the result
  const result = calculator.getResult();

  // Display the result
  console.log(`Result: ${result}`);
}

// Call the function to perform calculations
performCalculations();

// Intentional error: Trying to call a function that doesn't exist
missingFunction();

// Class representing a simple car
class Car {
  // Constructor to initialize the car
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Function to start the car
  start() {
    console.log('The car is starting.');
  }
}

// 
function createAndStartCar() {
  const myCar = new Car('Toyota', 'Camry');

  myCar.start();

  console.log(myCar.color);
}

// Call the function to create and start a car
createAndStartCar();
