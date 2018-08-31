const getPrefixes = s =>
  [...Array(s.length - 1)]
    .map((_, i) => i + 1)
    .reduce((a, v) => [...a, s.substring(0, v)], []);

module.exports = getPrefixes;
