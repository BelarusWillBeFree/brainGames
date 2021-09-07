#!/usr/bin/env node
import index from '../src/index.js';
import getRandom from '../src/getRandom.js';

const checkPrimeNumber = (CheckingNumber) => {
  for (let i = 1; i < CheckingNumber; i += 1) {
    if (CheckingNumber % i === 0) return 'no';
  }
  return 'yes';
};

const brainPrime = () => {
  const minValueRandomNum = 1;
  const maxValueRandomNum = 100;
  const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const Questions = [];
  const Answers = [];
  for (let i = 0; i < 3; i += 1) {
    const NumberQuestion = getRandom(maxValueRandomNum, minValueRandomNum);

    Answers[i] = checkPrimeNumber(NumberQuestion);
    Questions[i] = NumberQuestion;
  }
  index(generalQuestion, Questions, Answers);
};

brainPrime();
