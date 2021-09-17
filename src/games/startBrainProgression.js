import { questionCount, index as run } from '../index.js';
import getRandom from '../getRandom.js';

const maxRandomValue = 100;
const maxValueRepetitionInterval = 20;
const maxValueAmountOfElements = 10;
const minValueAmountOfElements = 5;

const generalQuestion = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const amountOfElements = getRandom(minValueAmountOfElements, maxValueAmountOfElements);
  let firstElement = getRandom(0, maxRandomValue);
  const repetitionInterval = getRandom(1, maxValueRepetitionInterval);
  for (let i = 0; i < amountOfElements; i += 1) {
    progression[i] = firstElement;
    firstElement += repetitionInterval;
  }
  return progression;
};

const generateOneRound = () => {
  const progression = getProgression();
  const hiddenElement = getRandom(0, progression.length - 1);
  let answer = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenElement) {
      answer = String(progression[i]);
      progression[i] = '..';
    }
  }
  return [progression.join(' '), answer];
};

const generatingQuestionAndAnswerForBrainProgression = () => {
  const rounds = [];
  for (let j = 0; j < questionCount; j += 1) {
    rounds.push(generateOneRound());
  }
  return rounds;
};

const startBrainProgression = () => {
  const questionsAndAnswers = generatingQuestionAndAnswerForBrainProgression();
  run(generalQuestion, questionsAndAnswers);
};

export default startBrainProgression;
