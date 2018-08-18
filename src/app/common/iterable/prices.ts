export const prices = {
  smartphone: 500,
  laptop: 1000,
  pc: 1500,
  tv: 700,
  [Symbol.iterator]: function* () {
    for (var i in this) {
      yield { key: i, value: this[i] };
    }
    return;
  }
};
