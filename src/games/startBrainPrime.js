import index from '../index.js';
import getRandom from '../getRandom.js';

const checkPrimeNumber = (CheckingNumber) => {
  const firstNumberForDivision = 2;
  for (let i = firstNumberForDivision; i < CheckingNumber; i += 1) {
    if (CheckingNumber % i === 0) return 'no';
  }
  return 'yes';
};
const generatingQuestionAndAnswerForBrainPrime = () => {
  const minValueRandomNum = 1;
  const maxValueRandomNum = 100;
  const maxAmountQuestions = 3;

  const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const Questions = [];
  const Answers = [];
  for (let i = 0; i < maxAmountQuestions; i += 1) {
    const NumberQuestion = getRandom(maxValueRandomNum, minValueRandomNum);

    Answers[i] = checkPrimeNumber(NumberQuestion);
    Questions[i] = NumberQuestion;
  }
  return [generalQuestion, [Questions, Answers]];
};
const startBrainPrime = () => {
  const [generalQuestion, QuestionsAndAnswers] = generatingQuestionAndAnswerForBrainPrime();
  index(generalQuestion, QuestionsAndAnswers);
};
export default startBrainPrime;
