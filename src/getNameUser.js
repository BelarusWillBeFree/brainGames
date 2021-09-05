import readlineSync from 'readline-sync';

const getNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const MessageHello = `Hello ${name}`;
  console.log(MessageHello);
  return name;
};
export default getNameUser;
