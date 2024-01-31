class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a + b; // Should be a - b
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

function performOperations() {
  const calculator = new Calculator();

  const sum = calculator.add(5, 3);
  console.log(`Sum: ${sum}`);

  console.log(`Difference: ${difference}`);

  const difference = calculator.subtract(10, 4);
  console.log(`Difference: ${difference}`);

  const product = calculator.multiply(2, 6);
  console.log(`Product: ${product}`);

  const quotient = calculator.divide(8, 2);
  console.log(`Quotient: ${quotient}`);

  console.log(`Result: ${calculator.result}`);
}

performOperations();
