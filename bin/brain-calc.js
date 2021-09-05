#!/usr/bin/env node
import index from '../src/index.js';

const getRandom = (maxValue) => Math.floor(Math.random() * maxValue);
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
const brainCalc = () => {
  const maxValueRandomNumbers = 100;
  const generalQuestion = 'What is the result of the expression?';
  const Questions = [];
  const Answers = [];
  const Operations = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandom(maxValueRandomNumbers);
    const operation = Operations[getRandom(3)];
    const secondOperand = getRandom(maxValueRandomNumbers);

    Questions[i] = `${firstOperand} ${operation} ${secondOperand}`;
    Answers[i] = getResultOperation(firstOperand, operation, secondOperand);
  }
  index(generalQuestion, Questions, Answers);
};

brainCalc();
