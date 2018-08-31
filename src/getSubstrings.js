const getSubstrings = s =>
  [...Array(s.length)]
    .map((_, i) => i + 1)
    .reduce(
      (a1, v) =>
        [...Array(s.length - v + 1)].reduce(
          (a2, _, j) => [...a2, s.substring(j, j + v)],
          a1
        ),
      []
    );

module.exports = getSubstrings;
