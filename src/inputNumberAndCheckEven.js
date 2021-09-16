import readlineSync from 'readline-sync';
import getRandom from './getRandom.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let resultTest = true;
  const maxAmountQuestions = 3;
  const maxValueRandomNumbers = 100;
  for (let numerOfRepet = 0; numerOfRepet < maxAmountQuestions; numerOfRepet += 1) {
    const numberForCheck = getRandom(maxValueRandomNumbers);
    console.log(`Question: ${numberForCheck}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log('You can only enter "yes" or "no"!');
      resultTest = false;
      break;
    }
    const isNumberEven = numberForCheck % 2 === 0;
    if (userAnswer === 'yes' && !isNumberEven) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      resultTest = false;
      break;
    }
    if (userAnswer === 'no' && isNumberEven) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      resultTest = false;
      break;
    }
    console.log('Correct!');
  }
  return resultTest;
};

export default even;
