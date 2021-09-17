import getRandom from '../getRandom.js';
import { questionCount, index as run } from '../index.js';

const maxValueRandomNumbers = 100;
const operationCount = 3;

const generalQuestion = 'What is the result of the expression?';

const getResultOperation = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return String(firstOperand + secondOperand);
    case '-':
      return String(firstOperand - secondOperand);
    case '*':
      return String(firstOperand * secondOperand);
    default:
      throw new Error(`Operation ${operation} is not supported`);
  }
};

const generateOneRound = () => {
  const operations = ['+', '-', '*'];
  const firstOperand = getRandom(0, maxValueRandomNumbers);
  const secondOperand = getRandom(0, maxValueRandomNumbers);
  const operation = operations[getRandom(0, operationCount)];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const answer = getResultOperation(firstOperand, secondOperand, operation);
  return [question, answer];
};

const generatingQuestionAndAnswers = () => {
  const rounds = [];
  for (let i = 0; i < questionCount; i += 1) {
    rounds.push(generateOneRound());
  }
  return rounds;
};

const startBrainCalc = () => {
  const questionsAndAnswers = generatingQuestionAndAnswers();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainCalc;
