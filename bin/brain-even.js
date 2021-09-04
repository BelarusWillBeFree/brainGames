#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const brainEven = () => {
  const userName = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let resultTest = true;
  for (let numerOfRepetitions = 0; numerOfRepetitions < 3; numerOfRepetitions += 1) {
    const numberForCheck = Math.floor(Math.random() * 100);
    const UserAnswer = readlineSync.question(`Question:${numberForCheck} :`).toLowerCase();
    if (UserAnswer !== 'yes' && UserAnswer !== 'no') {
      console.log('You can only enter "yes" or "no"!');
      resultTest = false;
      break;
    }
    const even = numberForCheck % 2 === 0;
    if (UserAnswer === 'yes' && !even) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      resultTest = false;
      break;
    }
    if (UserAnswer === 'no' && even) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      resultTest = false;
      break;
    }
    console.log('Correct!');
  }
  if (resultTest) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

brainEven();

export default brainEven;
