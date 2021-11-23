//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixStr) {
    this.matrix = this.#createMatrix(matrixStr);
  }

  #createMatrix(matrixStr) {
    const matrix = [];
    const splitteMatrixStr = matrixStr.split('\n');

    for (let i = 0, len = splitteMatrixStr.length; i < len; i += 1) {
      const row = [];
      const splittedRowString = splitteMatrixStr[i].split(' ');

      for (let j = 0, rowLen = splittedRowString.length; j < rowLen; j += 1) {
        row.push(Number(splittedRowString[j]));
      }

      matrix.push(row);
    }

    return matrix;
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    const matrixColumns = [];

    for (let i = 0, len = this.matrix.length; i <= len; i += 1) {
      const column = [];

      for (let j = 0; j < len; j += 1) {
        column.push(this.matrix[j][i]);
      }
      matrixColumns.push(column);
    }

    return matrixColumns;
  }
}
