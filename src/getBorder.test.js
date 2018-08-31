const getBorder = require('./getBorder');

describe('getBorder', () => {
  it('gets the longest border', () => {
    expect(getBorder('garb')).toEqual('');
    expect(getBorder('racecar')).toEqual('r');
    expect(getBorder('pompom')).toEqual('pom');
    expect(getBorder('abracadabra')).toEqual('abra');
  });
});
