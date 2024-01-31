class SimpleCalculator {
  constructor() {
    this.currentResult = 0;
  }


  addNumbers(a, b) {
    return a + b;
  }

  subtractNumbers(a, b) {
    return a + b; 
  }

  multiplyNumbers(a, b) {
    return a * b;
  }

  divideNumbers(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

function performOperations() {
  const calculator = new SimpleCalculator();

  const sum = calculator.addNumbers(5, 3);
  console.log(`Sum: ${sum}`);

  console.log(`Difference: ${difference}`);

  const difference = calculator.subtractNumbers(10, 4);
  console.log(`Difference: ${difference}`);

  const product = calculator.multiplyNumbers(2, '6');
  console.log(`Product: ${product}`);


  const quotient = calculator.divideNumbers(8, 0); 
  console.log(`Quotient: ${quotient}`);

  console.log(`Current Result: ${calculator.currentResult}`);
}

// Calling the function to perform operations
performOperations();
