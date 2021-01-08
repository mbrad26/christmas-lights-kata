const { LightsGrid } = require('../lib/lightsGrid');
const Light = require('../lib/light');

jest.mock('../lib/light');

describe('LightsGrid', () => {
  it('is defined', () => {
    expect(LightsGrid).toBeDefined();
  });

  it('instantiates with a 10 x 10 grid of lights', () => {
    const lightsGrid = new LightsGrid(Light);
    const grid = new Array(5).fill(new Array(5).fill(new Light()));

    expect(lightsGrid.grid.toString()).toEqual(grid.toString());
  });

  describe('#turnONLights', () => {
    const LightON = Light.mockImplementation(() => ({
      state: 'ON',
      turnON: jest.fn(),
      turnOFF: jest.fn(),
    }));

    const initialGrid = [
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()]
    ];

    it('turns on a set of lights', () => {
      const lightsGrid = new LightsGrid(Light);

      expect(lightsGrid.grid.toString()).toEqual(initialGrid.toString());

      lightsGrid.turnONLights(0, 0, 5, 5);

      expect(lightsGrid.grid.toString()).toEqual([
        [new LightON(), new LightON(), new LightON(), new LightON(), new LightON()],
        [new LightON(), new LightON(), new LightON(), new LightON(), new LightON()],
        [new LightON(), new LightON(), new LightON(), new LightON(), new LightON()],
        [new LightON(), new LightON(), new LightON(), new LightON(), new LightON()],
        [new LightON(), new LightON(), new LightON(), new LightON(), new LightON()]
      ].toString());
    });
  });
});