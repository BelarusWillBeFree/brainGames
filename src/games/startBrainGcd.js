import run from '../index.js';
import getRandom from '../getRandom.js';

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
  const maxValueRandomNumbers = 100;
  const firstNumber = getRandom(maxValueRandomNumbers);
  const secondNumber = getRandom(maxValueRandomNumbers);

  const answer = String(getResultGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};
const generatingQuestionAndAnswer = () => {
  const maxQuestionCount = 3;
  const rounds = [];
  for (let i = 0; i < maxQuestionCount; i += 1) {
    rounds[i] = generateOneRound();
  }
  return rounds;
};
const startBrainGcd = () => {
  const questionsAndAnswers = generatingQuestionAndAnswer();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainGcd;
