import index from '../index.js';
import getRandom from '../getRandom.js';

const getResultGcd = (number1, number2) => {
  if (number1 === 0) return number2;
  if (number2 === 0) return number1;
  if (number1 >= number2) {
    return getResultGcd(number1 % number2, number2);
  }
  return getResultGcd(number2 % number1, number1);
};
const generatingQuestionAndAnswerForBrainGcd = () => {
  const maxValueRandomNumbers = 100;
  const maxAmountQuestions = 3;
  const generalQuestion = 'Find the greatest common divisor of given numbers.';
  const Questions = [];
  const Answers = [];
  for (let i = 0; i < maxAmountQuestions; i += 1) {
    const firstNumber = getRandom(maxValueRandomNumbers);
    const secondNumber = getRandom(maxValueRandomNumbers);

    Answers[i] = String(getResultGcd(firstNumber, secondNumber));
    Questions[i] = `${firstNumber} ${secondNumber}`;
  }
  return [generalQuestion, [Questions, Answers]];
};
const startBrainGcd = () => {
  const [generalQuestion, QuestionsAndAnswers] = generatingQuestionAndAnswerForBrainGcd();
  index(generalQuestion, QuestionsAndAnswers);
};

export default startBrainGcd;
