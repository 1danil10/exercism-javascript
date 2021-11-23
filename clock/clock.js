//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  #minutes;
  constructor(hours, minutes = 0) {
    this.setMinutes(hours * 60 + minutes);
  }

  setMinutes(value) {
    const newMinutes = value % (24 * 60);
    this.#minutes = newMinutes < 0 ? newMinutes + 24 * 60 : newMinutes;
  }

  get hours() {
    return Math.floor(this.#minutes / 60) % 24;
  }

  get minutes() {
    return this.#minutes % 60;
  }

  toString() {
    return `${String(this.hours).padStart(2, 0)}:${String(
      this.minutes,
    ).padStart(2, 0)}`;
  }

  plus(value) {
    this.setMinutes(this.#minutes + value);
    return this;
  }

  minus(value) {
    this.setMinutes(this.#minutes - value);
    return this;
  }

  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }
}
