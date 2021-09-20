import getRandom from '../getRandom.js';
import run, { questionCount } from '../index.js';

const maxValueRandomNumbers = 100;

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
  const operation = operations[getRandom(0, operations.length - 1)];
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
