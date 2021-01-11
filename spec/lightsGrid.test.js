const LightsGrid  = require('../lib/lightsGrid');
const Light = require('../lib/light');

describe('LightsGrid', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('is defined', () => {
    expect(LightsGrid).toBeDefined();
  });

  it('instantiates with a 10 x 10 grid of lights', () => {
    const lightsGrid = new LightsGrid(Light);
    const grid = new Array(5).fill(new Array(5).fill(new Light()));

    expect(lightsGrid.grid.toString()).toEqual(grid.toString());
  });

  describe('#turnONLights', () => {
    it('turns 1 light ON', () => {
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 0, 0);

      for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
          if(i === 0 && j === 0) {
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
          } else {
            expect(lightsGrid.grid[i][j].state).toEqual('OFF');
          }
        };
      };
    });
  });
});