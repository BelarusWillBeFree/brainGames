const getResultGcd = (number1, number2) => {
  if (number1 === 0) return number2;
  if (number2 === 0) return number1;
  if (number1 >= number2) {
    return getResultGcd(number1 % number2, number2);
  }
  return getResultGcd(number2 % number1, number1);
};

export default getResultGcd;