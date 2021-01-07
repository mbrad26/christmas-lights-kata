const Light = require('../lib/light');

describe('Light', () => {
  it('is defined', () => {
    expect(Light).toBeDefined();
  });

  it('has the initial state of OFF', () => {
    const light = new Light();

    expect(light.state).toEqual('OFF');
  });
});