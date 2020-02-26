let calculator = require("../src/simple_calculator");

describe("Add function", function() {
  it("should be able add two numbers", function() {
    expect(calculator.add(1, 2)).toEqual(3);
  });

  it("Should be able to add negatives", function() {
    expect(calculator.add(-1, -1)).toEqual(-2);
  });

  it("should be able to add mult numbers", function() {
    expect(calculator.add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

describe("A simple calculator that multiply", function() {
  it("should be able add two numbers", function() {
    expect(calculator.multiply(1, 3)).toEqual(3);
  });

  it("Should be able to add negatives", function() {
    expect(calculator.multiply(-1, 3)).toEqual(-3);
  });

  it("should be able to add mult numbers", function() {
    expect(calculator.multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
