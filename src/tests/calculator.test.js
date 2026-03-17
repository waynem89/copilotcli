const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  normalizeOperator,
  calculate,
} = require("../calculator");

describe("calculator functions", () => {
  test("adds numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-5, 2)).toBe(-3);
  });

  test("subtracts numbers correctly", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(4, 10)).toBe(-6);
  });

  test("multiplies numbers correctly", () => {
    expect(multiply(45, 2)).toBe(90);
    expect(multiply(-3, 6)).toBe(-18);
  });

  test("divides numbers correctly", () => {
    expect(divide(20, 5)).toBe(4);
    expect(divide(7, 2)).toBe(3.5);
  });

  test("throws on division by zero", () => {
    expect(() => divide(20, 0)).toThrow("Division by zero is not allowed.");
  });

  test("computes modulo correctly", () => {
    expect(modulo(5, 2)).toBe(1);
    expect(modulo(10, 3)).toBe(1);
  });

  test("throws on modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("computes power correctly", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(9, 0.5)).toBe(3);
  });

  test("computes square root correctly", () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(2)).toBeCloseTo(1.41421356, 8);
  });

  test("throws on square root of a negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });
});

describe("operator normalization", () => {
  test("normalizes multiplication aliases", () => {
    expect(normalizeOperator("x")).toBe("*");
    expect(normalizeOperator("X")).toBe("*");
    expect(normalizeOperator("×")).toBe("*");
  });

  test("normalizes division aliases", () => {
    expect(normalizeOperator("÷")).toBe("/");
  });

  test("normalizes square root alias", () => {
    expect(normalizeOperator("sqrt")).toBe("√");
  });
});

describe("calculate", () => {
  test("supports image example operations", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
    expect(calculate(5, "%", 2)).toBe(1);
    expect(calculate(2, "^", 3)).toBe(8);
    expect(calculate(16, "√", 0)).toBe(4);
  });

  test("supports alias operators", () => {
    expect(calculate(8, "x", 2)).toBe(16);
    expect(calculate(9, "÷", 3)).toBe(3);
  });

  test("throws for unsupported operator", () => {
    expect(() => calculate(1, "?", 2)).toThrow("Unsupported operator");
  });

  test("throws for square root of negative numbers", () => {
    expect(() => calculate(-16, "√", 0)).toThrow("Square root of a negative number is not allowed.");
  });
});
