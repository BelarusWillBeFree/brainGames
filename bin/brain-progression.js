#!/usr/bin/env node
import index from '../src/index.js';
import getRandom from '../src/getRandom.js';

const brainProgression = () => {
  const generalQuestion = 'What number is missing in the progression?';
  const Progression = [];
  const Answers = [];
  let firstElement = getRandom(100);
  const repetitionInterval = getRandom(20, 1);
  const amountOfElements = getRandom(10, 5);
  const hiddenElement = getRandom(amountOfElements, 1);
  for (let i = 0; i < amountOfElements; i += 1) {
    if ((i + 1) === hiddenElement) {
      Answers[0] = firstElement;
      Progression[i] = '..';
    } else {
      Progression[i] = firstElement;
    }
    firstElement += repetitionInterval;
  }
  index(generalQuestion, [Progression.join(', ')], Answers);
};

brainProgression();
