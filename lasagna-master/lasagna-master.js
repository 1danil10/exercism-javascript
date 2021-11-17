/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Shows is lasagna already
 *
 * @param {Number} remainingTime
 * @returns {String} lasagna status
 */

export function cookingStatus(remainingTime) {
  let msg;
  if (remainingTime === undefined || typeof remainingTime !== 'number') {
    msg = 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    msg = 'Lasagna is done.';
  } else {
    msg = 'Not done, please wait.';
  }
  return msg;
}

/**
 * estimate how long the preparation will take
 *
 * @param {String[]} layers
 * @param {Number} averagePrepTime
 * @returns {Number} how much time is need to prepare things
 */

export function preparationTime(layers, averagePrepTime = 2) {
  return layers.length * averagePrepTime;
}

/**
 * @typedef {Object} Adds
 * @property {number} noodles
 * @property {number} sauce
 */

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {String[]} layers
 * @returns {Adds}
 */

const ADDS = {
  noodles: { amount: 50, measure: 'g' },
  sauce: { amount: 0.2, measure: 'L' },
};

export function quantities(layers) {
  return layers.reduce(
    (res, item) => {
      if (Object.prototype.hasOwnProperty.call(ADDS, item)) {
        res[item] += ADDS[item].amount;
      }
      return res;
    },
    { noodles: 0, sauce: 0 },
  );
}

/**
 * Adds the secret ingredient from friend recipe to mine recipe
 *
 * @param {String[]} ingridients1 - friends ingridients list
 * @param {String[]} ingridients2 - mine ingridients list
 * @return {Void}
 */

export function addSecretIngredient(ingridients1, ingridients2) {
  ingridients2.push(ingridients1[ingridients1.length - 1]);
}

/**
 * amount of ingredients for 2 servings of lasagna
 *
 * @typedef {Object} Recipe
 * @property {Number} Amounts.noodles
 * @property {Number} Amounts.sauce
 * @property {Number} Amounts.mozzarella
 * @property {Number} Amounts.meat
 *
 */

/**
 * return a recipe object with the amounts needed for the desired number of portions lasagna
 *
 * @param {Recipe} recipe
 * @param {Number} portionsAmount
 * @return {Recipe}  - updated recipe
 */

export function scaleRecipe(recipe, portionsAmount) {
  const coef = portionsAmount / 2;
  const updatedRecipe = Object.assign({}, recipe);
  for (const prop of Object.keys(recipe)) {
    updatedRecipe[prop] *= coef;
  }
  return updatedRecipe;
}
