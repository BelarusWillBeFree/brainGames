#!/usr/bin/env node
import index from '../src/index.js';
import getRandom from '../src/getRandom.js';
import getResultGcd from '../games/getResultGcd.js';

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
