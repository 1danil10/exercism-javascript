//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (dataObj) => {
  const result = {};

  for (const [ pointsValue, lettersArr ] of Object.entries(dataObj)) {
    lettersArr.forEach((value) => {
      const key = value.toLowerCase();
      result[key] = Number(pointsValue);
    });
  }

  return result;
};

const old = {
  1: ['A', 'E', 'I', 'O', 'U'],
  2: ['z', 'f'],
};
const expected = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

// console.log(transform(old));
