#!/usr/bin/env node
import getNameUser from '../src/getNameUser.js';
import inputNumberAndCheckEven from '../src/even.js';

const brainEven = () => {
  const userName = getNameUser();
  const resultTest = inputNumberAndCheckEven();
  if (resultTest) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

brainEven();
