const isDigit = (char: string): boolean => {
  return parseFloat(char).toString() !== "NaN";
};

const getGCD = (a: number, b: number) => {
  let remainder = a % b;
  while (remainder !== 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }
  return b;
};

export { isDigit, getGCD };
