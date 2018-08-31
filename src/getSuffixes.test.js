const getSuffixes = require('./getSuffixes');

describe('getSuffixes', () => {
  it('gets the correct number of suffixes', () => {
    const suffixes = getSuffixes('Unicorn!');
    expect(suffixes.length).toEqual(7);
  });
  it('gets the correct composition of suffixes', () => {
    const suffixes = getSuffixes('Unicorn!');
    expect(suffixes).toEqual([
      '!',
      'n!',
      'rn!',
      'orn!',
      'corn!',
      'icorn!',
      'nicorn!',
    ]);
  });
});
