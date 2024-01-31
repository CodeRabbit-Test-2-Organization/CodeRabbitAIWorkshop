class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

function createUserAndGreet() {
  try {
    const newUser = User('John', 25);

    const user = new User('John', 25);

    console.log(`User's gender: ${user.gender}`);

    user.sayHello();

    // Greet the user
    user.greet();
  } catch (error) {
    // Handle errors
    console.error(`Error: ${error.message}`);
  }
}

createUserAndGreet();

function performCalculation(a, b) {
  // Intentional error: Using the wrong operator
  return a ** b;
}

const result = performCalculation('5', 2);

console.log(`Calculation Result: ${result}`);
