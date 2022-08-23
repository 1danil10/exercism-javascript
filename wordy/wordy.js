//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '**': (a, b) => a ** b,
};

export const answer = (str) => {
  if (!str.startsWith('What is')) {
    throw new Error('Unknown operation');
  }

  const replacements = [
    { target: /(?:What is |\?)/, value: '' },
    {
      target: 'plus',
      value: '+',
    },
    {
      target: 'minus',
      value: '-',
    },
    {
      target: 'divided by',
      value: '/',
    },
    {
      target: 'multiplied by',
      value: '*',
    },
    {
      target: /raised to the (\d)+th/,
      value: `** $1`,
    },
  ];

  //replace words to math signs
  let temp = str;
  replacements.forEach(
    ({ target, value }) =>
      (temp = temp.replace(new RegExp(target, 'gi'), value)),
  );

  //transform words/string array into numbers and correct functions
  let splittedTempMap = temp.split(' ').map((word, idx) => {
    if (idx % 2 === 0) {
      if (Number.isNaN(Number(word))) {
        throw new Error('Syntax error');
      }
      return Number(word);
    } else if (idx % 2 !== 0) {
      if (!Number.isNaN(Number(word))) {
        throw new Error('Syntax error');
      }
      if (!(word in OPERATIONS)) {
        throw new Error('Unknown operation');
      }
      return OPERATIONS[word];
    }
  });

  if (splittedTempMap.length % 2 === 0) {
    throw new Error('Syntax error');
  }

  // do math
  while (splittedTempMap.length > 1) {
    const a = splittedTempMap.shift();
    const operation = splittedTempMap.shift();
    const b = splittedTempMap.shift();

    splittedTempMap = [operation(a, b), ...splittedTempMap];
  }

  return splittedTempMap[0];
};
