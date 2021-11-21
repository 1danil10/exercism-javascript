//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  static #MINUTES_IN_HOUR = 60;
  static #HOURS_IN_DAY = 24;
  #minutes;
  constructor(hours, minutes = 0) {
    this.#minutes = hours * Clock.#MINUTES_IN_HOUR + minutes;
  }
  get hours() {
    const hours =
      Math.floor(this.#minutes / Clock.#MINUTES_IN_HOUR) % Clock.#HOURS_IN_DAY;
    return hours >= 0 ? hours : hours + Clock.#HOURS_IN_DAY;
  }
  get minutes() {
    const minutes = this.#minutes % Clock.#MINUTES_IN_HOUR;
    return minutes >= 0 ? minutes : minutes + Clock.#MINUTES_IN_HOUR;
  }
  toString() {
    return `${String(this.hours).padStart(2, 0)}:${String(
      this.minutes,
    ).padStart(2, 0)}`;
  }
  plus(value) {
    this.#minutes += value;
    return this;
  }
  minus(value) {
    this.#minutes -= value;
    return this;
  }
  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }
}
