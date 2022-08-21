//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowsAmount) => {
  const result = [];

  if (rowsAmount === 0) {
    return result;
  }
  let rowIdx = 0;

  while (rowIdx <= rowsAmount) {
    const row = [];
    const prevRow = result[rowIdx - 1];
    const rowLength = rowIdx;
    let colIdx = 0;

    while (colIdx < rowLength) {
      let num = 0;

      switch (colIdx) {
        case 0:
        case rowLength - 1: {
          num = 1;
          break;
        }

        case 1:
        case rowLength - 2: {
          num = rowIdx - 1;
          break;
        }

        default: {
          num = prevRow[colIdx - 1] + prevRow[colIdx];
        }
      }

      row[colIdx] = num;
      colIdx += 1;
    }

    result.push(row);
    rowIdx++;
  }

  return result.slice(1);
};
