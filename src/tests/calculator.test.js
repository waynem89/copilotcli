const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(addition(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(addition(-2, -3)).toBe(-5);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(5, 3)).toBe(2);
  });

  test('subtracts a larger number from a smaller one', () => {
    expect(subtraction(3, 5)).toBe(-2);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });

  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  test('multiplies two negative numbers', () => {
    expect(multiplication(-2, -3)).toBe(6);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(division(7, 2)).toBe(3.5);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns the remainder of two positive numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns 0 when there is no remainder', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('works with negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('throws an error when modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power', () => {
  test('raises a number to a positive exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('raises a number to the power of 0', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test('raises 0 to a positive exponent', () => {
    expect(power(0, 5)).toBe(0);
  });
});

describe('squareRoot', () => {
  test('returns the square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns the square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135623730951);
  });

  test('returns 0 for square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow(
      'Square root of a negative number is not defined'
    );
  });
});
