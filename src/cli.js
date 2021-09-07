import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const MessageHello = `Hello ${name}`;
  return MessageHello;
};
export default cli;
