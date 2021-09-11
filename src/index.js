import readlineSync from 'readline-sync';

const index = (generalQuestion, inputParameters) => {
  const Questions = inputParameters[0];
  const Answers = inputParameters[1];
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(generalQuestion);
  let resultTest = true;
  for (let i = 0; i < Questions.length; i += 1) {
    const question = Questions[i];
    console.log(`Question: ${question}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (UserAnswer !== Answers[i]) {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Answers[i]}"`);
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
