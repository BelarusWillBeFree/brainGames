import readlineSync from 'readline-sync';

const index = (generalQuestion, inputParameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(generalQuestion);
  let resultTest = true;
  for (let i = 0; i < inputParameters.length; i += 1) {
    const question = inputParameters[i][0];
    console.log(`Question: ${question}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (UserAnswer !== inputParameters[i][1]) {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${inputParameters[i][1]}"`);
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
