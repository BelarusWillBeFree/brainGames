import index from '../index.js';
import getResultOperation from './getResultOperation.js';

const getRandom = (maxValue) => Math.floor(Math.random() * maxValue);

const generatingQuestionAndAnswerForBrainCalc = () => {
  const maxValueRandomNumbers = 100;
  const generalQuestion = 'What is the result of the expression?';
  const Questions = [];
  const Answers = [];
  const Operations = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandom(maxValueRandomNumbers);
    const operation = Operations[getRandom(3)];
    const secondOperand = getRandom(maxValueRandomNumbers);

    Questions[i] = `${firstOperand} ${operation} ${secondOperand}`;
    Answers[i] = getResultOperation(firstOperand, operation, secondOperand);
  }
  index(generalQuestion, Questions, Answers);
};
export default generatingQuestionAndAnswerForBrainCalc;
