const getPrefixes = require('./getPrefixes');

describe('getPrefixes', () => {
  it('gets the correct number of prefixes', () => {
    const prefixes = getPrefixes('Unicorn!');
    expect(prefixes.length).toEqual(7);
  });
  it('gets the correct composition of prefixes', () => {
    const prefixes = getPrefixes('Unicorn!');
    expect(prefixes).toEqual([
      'U',
      'Un',
      'Uni',
      'Unic',
      'Unico',
      'Unicor',
      'Unicorn',
    ]);
  });
});
