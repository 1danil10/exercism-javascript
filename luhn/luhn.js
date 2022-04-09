//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const validDouble = (num) => {
  const mult = num * 2;
  return mult > 9 ? mult - 9 : mult;
};

export const valid = (numberString) => {
  const clearedNumberString = numberString.replace(/\s/g, '');

  if (clearedNumberString.length <= 1) {
    return false;
  }
  const numbers = clearedNumberString.split('').reverse();

  return (
    numbers.reduce((sum, num, idx) => {
      if (idx % 2 !== 0) {
        sum += validDouble(+num);
      } else {
        sum += +num;
      }
      return sum;
    }, 0) %
      10 ===
    0
  );
};

