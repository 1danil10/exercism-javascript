//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  constructor({ maxFactor, minFactor }) {
    this.maxFactor = maxFactor;
    this.minFactor = minFactor;
  }

  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }
    return new Palindromes({ maxFactor, minFactor });
  }

  #isNumberPalindrom(number) {
    return +number.toString().split('').reverse().join('') === number;
  }

  get largest() {
    const result = { value: null, factors: [] };

    for (let i = this.maxFactor; i >= this.minFactor; i -= 1) {
      for (let j = this.maxFactor - 1; j >= this.minFactor; j -= 1) {
        const mult = i * j;
        if (mult > result.value && this.#isNumberPalindrom(mult)) {
          result.factors = [];
        }
        if (mult >= result.value && this.#isNumberPalindrom(mult)) {
          result.value = mult;

          const isUniqueFactors = result.factors.some((arr) => {
            return !arr.includes(i) && !arr.includes(j);
          });

          if (result.factors.length === 0 || isUniqueFactors) {
            result.factors.push([j, i]);
          }
        }
      }
    }

    return result;
  }

  get smallest() {
    const result = { value: null, factors: [] };

    for (let i = this.minFactor; i <= this.maxFactor; i += 1) {
      for (let j = this.minFactor; j <= this.maxFactor; j += 1) {
        const mult = i * j;
        if (!result.value && this.#isNumberPalindrom(mult)) {
          result.value = mult;
          result.factors.push([j, i]);
        }
      }
    }

    return result;
  }
}
