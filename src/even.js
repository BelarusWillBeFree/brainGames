import readlineSync from 'readline-sync';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let resultTest = true;
  for (let numerOfRepetitions = 0; numerOfRepetitions < 3; numerOfRepetitions += 1) {
    const numberForCheck = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberForCheck}`);
    const UserAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (UserAnswer !== 'yes' && UserAnswer !== 'no') {
      console.log('You can only enter "yes" or "no"!');
      resultTest = false;
      break;
    }
    const isNumberEven = numberForCheck % 2 === 0;
    if (UserAnswer === 'yes' && !isNumberEven) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      resultTest = false;
      break;
    }
    if (UserAnswer === 'no' && isNumberEven) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      resultTest = false;
      break;
    }
    console.log('Correct!');
  }
  return resultTest;
};

export default even;
