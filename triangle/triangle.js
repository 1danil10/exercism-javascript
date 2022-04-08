//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  _isSidesLengthCorrect() {
    return this.sides.every((side) => side > 0);
  }

  _getUniqueSidesAmount() {
    return new Set(this.sides).size;
  }

  _isTrianleInequalityExist() {
    const [maxSide, ...otherSides] = this.sides.sort((a, b) => b - a);
    const sumOfOtherSides = otherSides.reduce((sum, side) => sum + side);
    return maxSide < sumOfOtherSides;
  }

  get isEquilateral() {
    this._isTrianleInequalityExist();
    return this._isSidesLengthCorrect() && this._getUniqueSidesAmount() === 1;
  }

  get isIsosceles() {
    return (
      this._isSidesLengthCorrect() &&
      this._getUniqueSidesAmount() <= 2 &&
      this._isTrianleInequalityExist()
    );
  }

  get isScalene() {
    return (
      this._isSidesLengthCorrect() &&
      this._getUniqueSidesAmount() === 3 &&
      this._isTrianleInequalityExist()
    );
  }
}
