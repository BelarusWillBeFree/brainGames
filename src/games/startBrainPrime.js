import index from '../index.js';
import getRandom from '../getRandom.js';
import checkPrimeNumber from './checkPrimeNumber.js';

const startBrainPrime = () => {
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
export default startBrainPrime;
