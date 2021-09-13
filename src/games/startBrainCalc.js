import run from '../index.js';
import getRandom from '../getRandom.js';

const generalQuestion = 'What is the result of the expression?';

const getResultOperation = (firstOperand, operation, secondOperand) => {
  switch (operation) {
    case '+':
      return String(firstOperand + secondOperand);
    case '-':
      return String(firstOperand - secondOperand);
    default:
      return String(firstOperand * secondOperand);
  }
};
const generateOneRound = () => {
  const maxValueRandomNumbers = 100;
  const maxNumberOfOperation = 3;
  const firstOperand = getRandom(maxValueRandomNumbers);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandom(maxNumberOfOperation)];
  const secondOperand = getRandom(maxValueRandomNumbers);
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const answer = getResultOperation(firstOperand, operation, secondOperand);
  return [question, answer];
};
const generatingQuestionAndAnswerForBrainCalc = () => {
  const rounds = [];
  const maxAmountQuestions = 3;
  for (let i = 0; i < maxAmountQuestions; i += 1) {
    rounds[i] = generateOneRound();
  }
  return rounds;
};
const startBrainCalc = () => {
  const questionsAndAnswers = generatingQuestionAndAnswerForBrainCalc();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainCalc;
