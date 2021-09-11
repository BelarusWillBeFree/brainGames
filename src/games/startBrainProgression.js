import index from '../index.js';
import getRandom from '../getRandom.js';

const generatingQuestionAndAnswerForBrainProgression = () => {
  const generalQuestion = 'What number is missing in the progression?';
  const Questions = [];
  const Answers = [];
  const maxAmountQuestions = 3;
  for (let j = 0; j < maxAmountQuestions; j += 1) {
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
    for (let i = 0; i < amountOfElements; i += 1) {
      if ((i + 1) === hiddenElement) {
        Answers[j] = String(firstElement);
        Progression[i] = '..';
      } else {
        Progression[i] = firstElement;
      }
      firstElement += repetitionInterval;
    }
    Questions[j] = Progression.join(' ');
  }
  return [generalQuestion, [Questions, Answers]];
};
const startBrainProgression = () => {
  const [generalQuestion, QuestionsAndAnswers] = generatingQuestionAndAnswerForBrainProgression();
  index(generalQuestion, QuestionsAndAnswers);
};
export default startBrainProgression;
