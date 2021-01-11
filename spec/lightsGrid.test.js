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
    const initialGrid = [
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()],
      [new Light(), new Light(), new Light(), new Light(), new Light()]
    ];
    
    it('turns on a set of lights', () => {
      const LightON = jest.fn().mockImplementation(() => ({
        state: 'ON',
        turnON: jest.fn(),
        turnOFF: jest.fn(),
      }));
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

    it('turns 1 light on', () => {
      // Light.mockImplementation(() => ({
      //   state: 'OFF',
      //   turnON: jest.fn(() => this.state = 'ON'),
      //   turnOFF: jest.fn(() => this.state = 'OFF'),
      // }));
      const LightON = jest.fn().mockImplementation(() => ({
        state: 'ON',
        turnON: jest.fn(),
        turnOFF: jest.fn(),
      }));
      const lightsGrid = new LightsGrid(Light);

      expect(lightsGrid.grid.toString()).toEqual(initialGrid.toString());

      lightsGrid.turnONLights(0, 0, 0, 0);

      // console.log('THIS.GRID: ', lightsGrid.grid);

      expect(lightsGrid.grid).toEqual([
        [new LightON(), new Light(), new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light(), new Light(), new Light()],
        [new Light(), new Light(), new Light(), new Light(), new Light()]
      ]);
    });
  });
});