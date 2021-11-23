//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixStr) {
    this.matrix = this.#createMatrix(matrixStr);
  }

  #createMatrix(matrixStr) {
    return matrixStr
      .split('\n')
      .map((rowStr) => rowStr.split(' ').map((rowEl) => Number(rowEl)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix.reduce((resultMatrix, matrixRow) => {
      matrixRow.forEach((rowElement, rowElementIdx) => {
        if (!resultMatrix[rowElementIdx]) {
          resultMatrix[rowElementIdx] = [];
        }
        resultMatrix[rowElementIdx].push(rowElement);
      });
      return resultMatrix;
    }, []);
  }
}
