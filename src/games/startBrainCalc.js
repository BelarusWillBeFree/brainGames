import index from '../index.js';
import getRandom from '../getRandom.js';

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
const generatingQuestionAndAnswerForBrainCalc = () => {
  const maxValueRandomNumbers = 100;
  const generalQuestion = 'What is the result of the expression?';
  const Questions = [];
  const Answers = [];
  const maxAmountQuestions = 3;
  const Operations = ['+', '-', '*'];
  for (let i = 0; i < maxAmountQuestions; i += 1) {
    const firstOperand = getRandom(maxValueRandomNumbers);
    const operation = Operations[getRandom(3)];
    const secondOperand = getRandom(maxValueRandomNumbers);

    Questions[i] = `${firstOperand} ${operation} ${secondOperand}`;
    Answers[i] = getResultOperation(firstOperand, operation, secondOperand);
  }
  return [generalQuestion, [Questions, Answers]];
};
const startBrainCalc = () => {
  const [generalQuestion, QuestionsAndAnswers] = generatingQuestionAndAnswerForBrainCalc();
  index(generalQuestion, QuestionsAndAnswers);
};

export default startBrainCalc;
