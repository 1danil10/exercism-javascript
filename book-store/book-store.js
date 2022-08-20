//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DISCOUNTS = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
};

const BOOK_PRICE = 8;

const calcBooksSetCost = (uniqueBooksAmount) => {
  return uniqueBooksAmount * (BOOK_PRICE * DISCOUNTS[uniqueBooksAmount]);
};

const arrToMap = (arr) => {
  return arr.reduce((map, book) => {
    if (map[book]) {
      map[book]++;
    } else {
      map[book] = 1;
    }
    return map;
  }, {});
};

const calcBalancedStrategy = (booksMap) => {
  const sortedArraysByQuantity = Object.entries(booksMap)
    .sort((a, b) => b[1] - a[1])
    .map(([bookKey, booksAmount]) => {
      return Array.from({ length: booksAmount }).fill(+bookKey);
    });

  const balancedSize = sortedArraysByQuantity[0].length;
  const bookGroups = Array.from({ length: balancedSize }).map((_) => []);

  let i = 0;

  while (sortedArraysByQuantity.length) {
    const currentBookArr = sortedArraysByQuantity.shift();
    while (currentBookArr.length) {
      bookGroups[i % balancedSize].push(currentBookArr.shift());
      i = (i + 1) % balancedSize;
    }
  }

  return Math.round(
    bookGroups.reduce((total, currentSet) => {
      return total + calcBooksSetCost(currentSet.length);
    }, 0) * 100,
  );
};

const calcLargestStrategy = (booksMap) => {
  const bookGroups = [];

  while (Object.keys(booksMap).length > 0) {
    const bookKeys = Object.keys(booksMap);
    const bookValues = Object.values(booksMap);
    const minValue = Math.min(...bookValues);

    for (const bookKey of bookKeys) {
      booksMap[bookKey] -= minValue;
      if (booksMap[bookKey] === 0) {
        delete booksMap[bookKey];
      }
    }
    bookGroups.push({
      uniqueBooksInSet: bookKeys.length,
      uniqueBooksSetsAmount: minValue,
    });
  }

  return Math.round(
    bookGroups.reduce((total, currentSet) => {
      return (
        total +
        calcBooksSetCost(currentSet.uniqueBooksInSet) *
          currentSet.uniqueBooksSetsAmount
      );
    }, 0) * 100,
  );
};

export const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }
  let booksMap = arrToMap(books);

  return Math.min(
    calcBalancedStrategy(booksMap),
    calcLargestStrategy(booksMap),
  );
};
