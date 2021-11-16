// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const JUICES = {
  'Pure Strawberry Joy': { time: 0.5 },
  Energizer: { time: 1.5 },
  'Green Garden': { time: 1.5 },
  'Tropical Island': { time: 3 },
  'All or Nothing': { time: 5 },
  other: { time: 2.5 },
};

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return JUICES[name]?.time ?? JUICES.other.time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

const wedgesAmountFromLime = {
  small: 6,
  medium: 8,
  large: 10,
};

export function limesToCut(wedgesNeeded, limes) {
  if (limes && limes.length === 0) {
    return 0;
  }
  let wedges = 0;
  let count = 0;
  for (let i = 0, len = limes.length; i < len; i += 1) {
    if (wedges >= wedgesNeeded) {
      break;
    }
    wedges += wedgesAmountFromLime[limes[i]];
    count += 1;
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const remainOrders = [];
  let time = timeLeft;
  for (let i = 0, len = orders.length; i < len; i += 1) {
    const juice = orders[i];
    const mixTime = timeToMixJuice(juice);
    if (time > 0) {
      time -= mixTime;
    } else {
      remainOrders.push(juice);
    }
  }
  return remainOrders;
}
