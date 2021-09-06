#!/usr/bin/env node
import index from '../src/index.js';
import getRandom from '../src/getRandom.js';

const getResultGcd = (number1, number2) => {
  if (number1 === 0) return number2;
  if (number2 === 0) return number1;
  if (number1 >= number2) {
    return getResultGcd(number1 % number2, number2);
  }
  return getResultGcd(number2 % number1, number1);
};

const brainGcd = () => {
  const maxValueRandomNumbers = 100;
  const generalQuestion = 'Find the greatest common divisor of given numbers.';
  const Questions = [];
  const Answers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandom(maxValueRandomNumbers);
    const secondNumber = getRandom(maxValueRandomNumbers);

    Answers[i] = getResultGcd(firstNumber, secondNumber);
    Questions[i] = `${firstNumber} ${secondNumber}`;
  }
  index(generalQuestion, Questions, Answers);
};

brainGcd();
