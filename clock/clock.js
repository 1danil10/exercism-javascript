//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  static #MINUTES_IN_HOUR = 60;
  static #HOURS_IN_DAY = 24;
  static #MINUTES_IN_DAY = Clock.#HOURS_IN_DAY * Clock.#MINUTES_IN_HOUR;
  #minutes;
  constructor(hours, minutes = 0) {
    this.#minutes = this.#setMinutes(hours * Clock.#MINUTES_IN_HOUR + minutes);
  }

  #setMinutes(value) {
    return value < 0
      ? (value % Clock.#MINUTES_IN_DAY) + Clock.#MINUTES_IN_DAY
      : value;
  }

  get hours() {
    return (
      Math.floor(this.#minutes / Clock.#MINUTES_IN_HOUR) % Clock.#HOURS_IN_DAY
    );
  }

  get minutes() {
    return this.#minutes % Clock.#MINUTES_IN_HOUR;
  }

  toString() {
    return `${String(this.hours).padStart(2, 0)}:${String(
      this.minutes,
    ).padStart(2, 0)}`;
  }

  plus(value) {
    this.#minutes = this.#setMinutes(this.#minutes + value);
    return this;
  }

  minus(value) {
    this.#minutes = this.#setMinutes(this.#minutes - value);
    return this;
  }

  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }
}
