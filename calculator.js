class SimpleCalculator {
  add(a, b) {
    return a + b;
  }
  subract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("undefined");
    }
    return a / b;
  }
}

const calc = new SimpleCalculator();

module.exports = calc;
