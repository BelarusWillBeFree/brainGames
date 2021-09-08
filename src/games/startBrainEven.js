import getNameUser from '../getNameUser.js';
import inputNumberAndCheckEven from './even.js';

const startBrainEven = () => {
  const userName = getNameUser();
  const resultTest = inputNumberAndCheckEven();
  if (resultTest) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startBrainEven;
