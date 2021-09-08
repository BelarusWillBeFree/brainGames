const checkPrimeNumber = (CheckingNumber) => {
  for (let i = 2; i < CheckingNumber; i += 1) {
    if (CheckingNumber % i === 0) return 'no';
  }
  return 'yes';
};

export default checkPrimeNumber;
