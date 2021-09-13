import run from '../index.js';
import getRandom from '../getRandom.js';

const generalQuestion = 'What number is missing in the progression?';
const generateOneRound = () => {
  const Progression = [];
  const maxRandomValue = 100;
  const maxValueRepetitionInterval = 20;
  const minValueRepetitionInterval = 1;
  const maxValueAmountOfElements = 10;
  const minValueAmountOfElements = 5;
  const minValueHiddenElement = 1;
  let firstElement = getRandom(maxRandomValue);
  const repetitionInterval = getRandom(maxValueRepetitionInterval, minValueRepetitionInterval);
  const amountOfElements = getRandom(maxValueAmountOfElements, minValueAmountOfElements);
  const hiddenElement = getRandom(amountOfElements, minValueHiddenElement);
  let answer = '';
  for (let i = 0; i < amountOfElements; i += 1) {
    if ((i + 1) === hiddenElement) {
      answer = String(firstElement);
      Progression[i] = '..';
    } else {
      Progression[i] = firstElement;
    }
    firstElement += repetitionInterval;
  }
  const question = Progression.join(' ');
  return [question, answer];
};
const generatingQuestionAndAnswerForBrainProgression = () => {
  const rounds = [];
  const maxAmountQuestions = 3;
  for (let j = 0; j < maxAmountQuestions; j += 1) {
    rounds[j] = generateOneRound();
  }
  return rounds;
};
const startBrainProgression = () => {
  const questionsAndAnswers = generatingQuestionAndAnswerForBrainProgression();
  run(generalQuestion, questionsAndAnswers);
};
export default startBrainProgression;
