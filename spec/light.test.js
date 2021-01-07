const Light = require('../lib/light');

describe('Light', () => {
  it('is defined', () => {
    expect(Light).toBeDefined();
  });

  it('has the initial state of OFF', () => {
    const light = new Light();

    expect(light.state).toEqual('OFF');
  });

  describe('#turnON', () => {
    it('turns the light on', () => {
      const light = new Light();

      light.turnON();

      expect(light.state).toEqual('ON');
    });
  });

  describe('#turnOFF', () => {
    it('turns the light off', () => {
      const light = new Light();

      light.turnON();
      light.turnOFF();

      expect(light.state).toEqual('OFF');
    });
  });
});