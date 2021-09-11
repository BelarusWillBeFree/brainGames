import readlineSync from 'readline-sync';
import inputNumberAndCheckEven from '../inputNumberAndCheckEven.js';

const startBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const resultTest = inputNumberAndCheckEven();
  if (resultTest) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startBrainEven;
