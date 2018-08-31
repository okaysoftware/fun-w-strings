const getSubstrings = require('./getSubstrings');

describe('getSubstrings', () => {
  it('gets the correct number of substrings', () => {
    const substrings = getSubstrings('Unicorn!');
    expect(substrings.length).toEqual(36);
  });
  it('gets the correct composition of substrings', () => {
    const substrings = getSubstrings('Unicorn!');
    expect(substrings).toEqual([
      'U',
      'n',
      'i',
      'c',
      'o',
      'r',
      'n',
      '!',
      'Un',
      'ni',
      'ic',
      'co',
      'or',
      'rn',
      'n!',
      'Uni',
      'nic',
      'ico',
      'cor',
      'orn',
      'rn!',
      'Unic',
      'nico',
      'icor',
      'corn',
      'orn!',
      'Unico',
      'nicor',
      'icorn',
      'corn!',
      'Unicor',
      'nicorn',
      'icorn!',
      'Unicorn',
      'nicorn!',
      'Unicorn!',
    ]);
  });
});
