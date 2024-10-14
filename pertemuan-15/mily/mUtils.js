const phi = 3.14;

const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  let sum = 0;

  numbers.map((num) => (sum += num));

  return `The sum is ${sum}`;
};

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// Export the functions
export { addNumber, calculateArea };
