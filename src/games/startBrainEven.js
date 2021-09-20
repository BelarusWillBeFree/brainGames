import run, { questionCount } from '../index.js';
import getRandom from '../getRandom.js';

const maxValueRandomNum = 100;

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkingNumber) => checkingNumber % 2 === 0;

const generateOneRound = () => {
  const numberQuestion = getRandom(1, maxValueRandomNum);
  const answer = isEven(numberQuestion) ? 'yes' : 'no';
  const question = numberQuestion;
  return [question, answer];
};

const generatingQuestionAndAnswer = () => {
  const rounds = [];
  for (let i = 0; i < questionCount; i += 1) {
    rounds.push(generateOneRound());
  }
  return rounds;
};

const startBrainEven = () => {
  const questionsAndAnswers = generatingQuestionAndAnswer();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainEven;
