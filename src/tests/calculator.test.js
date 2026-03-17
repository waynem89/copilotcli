const {
  add,
  subtract,
  multiply,
  divide,
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
});

describe("calculate", () => {
  test("supports image example operations", () => {
    expect(calculate(2, "+", 3)).toBe(5);
    expect(calculate(10, "-", 4)).toBe(6);
    expect(calculate(45, "*", 2)).toBe(90);
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("supports alias operators", () => {
    expect(calculate(8, "x", 2)).toBe(16);
    expect(calculate(9, "÷", 3)).toBe(3);
  });

  test("throws for unsupported operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unsupported operator");
  });
});
