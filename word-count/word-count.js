//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  return str
    .toLowerCase()
    .match(/\w+(?:'\w+)?/g)
    .reduce((map, word) => {
      if (word in map) {
        map[word]++;
      } else {
        map[word] = 1;
      }
      return map;
    }, {});
};
