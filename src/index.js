import readlineSync from 'readline-sync';

const index = (generalQuestion, questionsAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(generalQuestion);
  let resultTest = true;
  for (let i = 0; i < questionsAnswers.length; i += 1) {
    const [question, answer] = questionsAnswers[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
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
