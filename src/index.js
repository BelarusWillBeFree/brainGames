import readlineSync from 'readline-sync';
import getNameUser from './getNameUser.js';

const index = (generalQuestion, Questions, Answers) => {
  const userName = getNameUser();
  console.log(generalQuestion);
  let resultTest = true;
  for (let i = 0; i < Questions.length; i += 1) {
    const question = Questions[i];
    console.log(`Question: ${question}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (Number(UserAnswer) !== Answers[i]) {
      console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${Answers[i]}'`);
      resultTest = false;
      break;
    }
    console.log('Correct!');
  }
  if (resultTest) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
export default index;
