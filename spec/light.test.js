const Light = require('../lib/light');

describe('Light', () => {
  let light;

  beforeEach(() => {
    light = new Light();
  });

  it('is defined', () => {
    expect(Light).toBeDefined();
  });

  it('has the initial state of OFF', () => {
    expect(light.state).toEqual('OFF');
  });

  describe('#turnON', () => {
    it('turns the light on', () => {
      light.turnON();

      expect(light.state).toEqual('ON');
    });
  });

  describe('#turnOFF', () => {
    it('turns the light off', () => {
      light.turnON();
      light.turnOFF();

      expect(light.state).toEqual('OFF');
    });
  });
});