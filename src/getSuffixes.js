const getSuffixes = s =>
  [...Array(s.length - 1)]
    .map((_, i) => i + 1)
    .reduce((a, v) => [...a, s.substring(s.length - v, s.length)], []);

module.exports = getSuffixes;
