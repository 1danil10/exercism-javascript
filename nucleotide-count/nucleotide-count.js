//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const nucleotides = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const char of strand) {
    if (!nucleotides.hasOwnProperty(char)) {
      throw new Error('Invalid nucleotide in strand');
    }
    nucleotides[char] += 1;
  }

  return Object.values(nucleotides).join(' ');
}
