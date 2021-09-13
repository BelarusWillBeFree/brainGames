import run from '../index.js';
import getRandom from '../getRandom.js';

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrimeNumber = (checkingNumber) => {
  const firstNumberForDivision = 2;
  for (let i = firstNumberForDivision; i < checkingNumber; i += 1) {
    if (checkingNumber % i === 0) return 'no';
  }
  return 'yes';
};
const generateOneRound = () => {
  const minValueRandomNum = 1;
  const maxValueRandomNum = 100;
  const numberQuestion = getRandom(maxValueRandomNum, minValueRandomNum);

  const answer = checkPrimeNumber(numberQuestion);
  const question = numberQuestion;
  return [question, answer];
};
const generatingQuestionAndAnswerForBrainPrime = () => {
  const maxAmountQuestions = 3;

  const rounds = [];
  for (let i = 0; i < maxAmountQuestions; i += 1) {
    rounds[i] = generateOneRound();
  }
  return rounds;
};
const startBrainPrime = () => {
  const questionsAndAnswers = generatingQuestionAndAnswerForBrainPrime();
  run(generalQuestion, questionsAndAnswers);
};
export default startBrainPrime;
