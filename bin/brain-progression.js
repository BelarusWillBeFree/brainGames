#!/usr/bin/env node
import index from '../src/index.js';
import getRandom from '../src/getRandom.js';

const brainProgression = () => {
  const generalQuestion = 'What number is missing in the progression?';
  const Questions = [];
  const Answers = [];
  for (let j = 0; j < 3; j += 1) {
    const Progression = [];
    let firstElement = getRandom(100);
    const repetitionInterval = getRandom(20, 1);
    const amountOfElements = getRandom(10, 5);
    const hiddenElement = getRandom(amountOfElements, 1);
    for (let i = 0; i < amountOfElements; i += 1) {
      if ((i + 1) === hiddenElement) {
        Answers[j] = firstElement;
        Progression[i] = '..';
      } else {
        Progression[i] = firstElement;
      }
      firstElement += repetitionInterval;
    }
    Questions[j] = Progression.join(', ');
  }
  index(generalQuestion, Questions, Answers);
};

brainProgression();
