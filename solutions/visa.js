const checkVisa = (cardNo = '') => {
  // https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
  const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const cleanCardNo = cardNo.replace(/\D/g, '');

  return pattern.test(cleanCardNo);
};

export default checkVisa;
