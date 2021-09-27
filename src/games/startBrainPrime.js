import run, { questionCount } from '../index.js';
import getRandom from '../getRandom.js';

const maxValueRandomNumber = 100;
const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (checkingNumber) => {
  const firstNumberForDivision = 2;
  for (let i = firstNumberForDivision; i < checkingNumber; i += 1) {
    if (checkingNumber % i === 0) return false;
  }
  return checkingNumber > firstNumberForDivision;
};

const generateOneRound = () => {
  const numberQuestion = getRandom(1, maxValueRandomNumber);
  const answer = isPrime(numberQuestion) ? 'yes' : 'no';
  const question = numberQuestion;
  return [question, answer];
};

const generatingQuestionAndAnswerForBrainPrime = () => {
  const rounds = [];
  for (let i = 0; i < questionCount; i += 1) {
    rounds.push(generateOneRound());
  }
  return rounds;
};

const startBrainPrime = () => {
  const questionsAndAnswers = generatingQuestionAndAnswerForBrainPrime();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainPrime;
