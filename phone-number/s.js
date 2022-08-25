const isValidStr = (regexp, str) => {
  return regexp.test(str);
};

const clean = (numberStr) => {
  if (isValidStr(/[@:!]/g, numberStr)) {
    throw new Error('Punctuations not permitted');
  }
  if (isValidStr(/[a-z]/g, numberStr)) {
    throw new Error('Letters not permitted');
  }

  let cleanedStr = numberStr.replace(/\W/g, '');
  let countryCode = '';

  if (cleanedStr.length < 10) {
    throw new Error('Incorrect number of digits');
  }
  if (cleanedStr.length > 11) {
    throw new Error('More than 11 digits');
  }

  if (cleanedStr.length === 11) {
    if (!cleanedStr.startsWith('1')) {
      throw new Error('11 digits must start with 1');
    } else {
      countryCode = cleanedStr[0];
      cleanedStr = cleanedStr.slice(1);
    }
  }

  const areaCode = cleanedStr.slice(0, 3);
  const isAreaCodeValid = isValidStr(/^[2-9]\d{2}$/, areaCode);
  if (!isAreaCodeValid) {
    if (areaCode.startsWith('0')) {
      throw new Error('Area code cannot start with zero');
    }
    if (areaCode.startsWith('1')) {
      throw new Error('Area code cannot start with one');
    }
  }

  const exchangeCode = cleanedStr.slice(3, 6);
  const isExchangeCodeValid = isValidStr(/^[2-9]\d{2}$/, exchangeCode);
  if (!isExchangeCodeValid) {
    if (exchangeCode.startsWith('0')) {
      throw new Error('Exchange code cannot start with zero');
    }
    if (exchangeCode.startsWith('1')) {
      throw new Error('Exchange code cannot start with one');
    }
  }

  const subscriberNumber = cleanedStr.slice(6, 10);
  const isSubscriberNumberValid = isValidStr(/^\d{4}$/, subscriberNumber);

  return cleanedStr;
};

// console.log(clean('(223) 456-7890'));
console.log(clean('(023) 456-7890'));
