//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (value1, value2) => {
  if (value1.length !== value2.length) {
    throw new Error('strands must be of equal length');
  }

  let differences = 0;
  for (let i = 0; i < value1.length; i += 1) {
    if (value1[i] !== value2[i]) {
      differences += 1;
    }
  }
  return differences;
};
