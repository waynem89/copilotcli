#!/usr/bin/env node

/**
 * Supported operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*, x, X, ×)
 * - Division (/, ÷)
 */

const normalizeOperator = (operator) => {
  if (operator === "x" || operator === "X" || operator === "×") {
    return "*";
  }

  if (operator === "÷") {
    return "/";
  }

  return operator;
};

const add = (left, right) => left + right;
const subtract = (left, right) => left - right;
const multiply = (left, right) => left * right;
const divide = (left, right) => {
  if (right === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return left / right;
};

const calculate = (left, operatorRaw, right) => {
  const operator = normalizeOperator(operatorRaw);

  switch (operator) {
    case "+":
      return add(left, right);
    case "-":
      return subtract(left, right);
    case "*":
      return multiply(left, right);
    case "/":
      return divide(left, right);
    default:
      throw new Error("Unsupported operator. Use one of: +, -, *, /, x, X, ×, ÷");
  }
};

const runCli = (args = process.argv.slice(2)) => {
  const [leftRaw, operatorRaw, rightRaw] = args;

  if (!leftRaw || !operatorRaw || !rightRaw) {
    console.error("Usage: node src/calculator.js <number1> <operator> <number2>");
    process.exit(1);
  }

  const left = Number(leftRaw);
  const right = Number(rightRaw);

  if (Number.isNaN(left) || Number.isNaN(right)) {
    console.error("Both operands must be valid numbers.");
    process.exit(1);
  }

  const normalizedOperator = normalizeOperator(operatorRaw);
  const supportedOperators = ["+", "-", "*", "/"];

  if (!supportedOperators.includes(normalizedOperator)) {
    console.error("Unsupported operator. Use one of: +, -, *, /, x, X, ×, ÷");
    process.exit(1);
  }

  if (normalizedOperator === "/" && right === 0) {
    console.error("Division by zero is not allowed.");
    process.exit(1);
  }

  const result = calculate(left, normalizedOperator, right);
  console.log(result);
};

if (require.main === module) {
  runCli();
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  normalizeOperator,
  calculate,
  runCli,
};
