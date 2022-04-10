//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sortLettersInWord = (word) =>
  word
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

export const findAnagrams = (word, candidates) => {
  const anagrams = [];
  const sortedWord = sortLettersInWord(word);

  for (const candidate of candidates) {
    if (
      sortedWord.length !== candidate.length ||
      word.toLowerCase() === candidate.toLowerCase()
    ) {
      continue;
    }
    const sortedCandidate = sortLettersInWord(candidate);
    if (sortedWord !== sortedCandidate) {
      continue;
    }
    anagrams.push(candidate);
  }

  return anagrams;
};
