const getBorder = s =>
  s.substring(
    0,
    [...Array(s.length)]
      .map((_, i) => i)
      .reduce((a, v) => [...a, s[a[v - 1]] === s[v] ? a[v - 1] + 1 : 0], [])
      .slice(-1)[0]
  );

module.exports = getBorder;
