class SimpleCalculator {
  constructor() {
    this.currentResult = 0;
  }

  // Adds two numbers and returns the result
  addNumbers(a, b) {
    return a + b;
  }

  // Subtracts second number from the first and returns the result
  subtractNumbers(a, b) {
    return a + b; // Logical error: Should be a - b
  }

  // Multiplies two numbers and returns the result
  multiplyNumbers(a, b) {
    return a * b;
  }

  // Divides first number by the second and returns the result
  divideNumbers(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

// Function to perform various operations using the SimpleCalculator
function performOperations() {
  const calculator = new SimpleCalculator();

  // Adding 5 and 3
  const sum = calculator.addNumbers(5, 3);
  console.log(`Sum: ${sum}`);

  console.log(`Difference: ${difference}`); // ReferenceError: difference is not defined

  // Subtracting 4 from 10
  const difference = calculator.subtractNumbers(10, 4);
  console.log(`Difference: ${difference}`);

  // Multiplying 2 and '6' (string)
  const product = calculator.multiplyNumbers(2, '6'); // Type error: '6' should be a number
  console.log(`Product: ${product}`);

  // Dividing 8 by 0
  const quotient = calculator.divideNumbers(8, 0); // Throws an error: Cannot divide by zero
  console.log(`Quotient: ${quotient}`);

  console.log(`Current Result: ${calculator.currentResult}`);
}

// Calling the function to perform operations
performOperations();
