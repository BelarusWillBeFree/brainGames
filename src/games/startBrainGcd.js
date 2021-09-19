import { questionCount, run } from '../index.js';
import getRandom from '../getRandom.js';

const maxValueRandomNumbers = 100;
const minValueRandomNumbers = 2;

const generalQuestion = 'Find the greatest common divisor of given numbers.';

const getResultGcd = (number1, number2) => {
  if (number1 === 0) return number2;
  if (number2 === 0) return number1;
  if (number1 >= number2) {
    return getResultGcd(number1 % number2, number2);
  }
  return getResultGcd(number2 % number1, number1);
};

const generateOneRound = () => {
  const firstNumber = getRandom(minValueRandomNumbers, maxValueRandomNumbers);
  const secondNumber = getRandom(minValueRandomNumbers, maxValueRandomNumbers);

  const answer = String(getResultGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

const generatingQuestionAndAnswer = () => {
  const rounds = [];
  for (let i = 0; i < questionCount; i += 1) {
    rounds.push(generateOneRound());
  }
  return rounds;
};

const startBrainGcd = () => {
  const questionsAndAnswers = generatingQuestionAndAnswer();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainGcd;
