//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  get hours() {
    return this._hours;
  }

  set hours(value) {
    const isPositive = value > 0 ? 1 : -1;
    const absoluteValue = Math.abs(value) % 24;
    this._hours = (isPositive === 1 ? absoluteValue : 24 - absoluteValue) % 24;
  }

  get minutes() {
    return this._minutes;
  }

  set minutes(value) {
    if (value === 0) {
      this._minutes = 0;
      return;
    }
    const isPositive = value > 0 ? 1 : -1;
    const absoluteValue = Math.abs(value);
    const minutes = absoluteValue % 60;

    if (absoluteValue >= 60) {
      const hours = Math.floor(absoluteValue / 60);
      this.hours = this.hours + hours * isPositive;
    }

    if (isPositive === -1 && minutes > 0) {
      this.hours = this.hours - 1;
      this._minutes = 60 - minutes;
    } else {
      this._minutes = minutes;
    }
  }

  toString() {
    return `${String(this.hours).padStart(2, 0)}:${String(
      this.minutes,
    ).padStart(2, 0)}`;
  }

  plus(value) {
    this.minutes = this.minutes + value;
    return this;
  }

  minus(value) {
    this.minutes = this.minutes - value;
    return this;
  }

  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }
}
