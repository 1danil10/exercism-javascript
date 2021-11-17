// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */

function sumSlotMachineNumbers(arr) {
  return Number(arr.join(''));
}

export function twoSum(array1, array2) {
  return sumSlotMachineNumbers(array1) + sumSlotMachineNumbers(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value === Number([...String(value)].reverse().join(''));
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let msg;
  if (!input) {
    msg = 'Required field';
  } else if (Number.isNaN(Number(input)) || Number(input) === 0) {
    msg = 'Must be a number besides 0';
  } else {
    msg = '';
  }
  return msg;
}
