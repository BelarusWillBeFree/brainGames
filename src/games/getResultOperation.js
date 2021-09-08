const getResultOperation = (firstOperand, operation, secondOperand) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default:
      return firstOperand * secondOperand;
  }
};

export default getResultOperation;
