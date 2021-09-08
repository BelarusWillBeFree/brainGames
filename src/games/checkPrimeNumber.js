const checkPrimeNumber = (CheckingNumber) => {
  for (let i = 1; i < CheckingNumber; i += 1) {
    if (CheckingNumber % i === 0) return 'no';
  }
  return 'yes';
};

export default checkPrimeNumber;
