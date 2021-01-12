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
    const grid = new Array(10).fill(new Array(10).fill(new Light()));

    expect(lightsGrid.grid.toString()).toEqual(grid.toString());
  });

  describe('#turnONLights', () => {
    it('turns 1 light ON', () => {
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 0, 0);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i === 0 && j === 0) {
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
          } else {
            expect(lightsGrid.grid[i][j].state).toEqual('OFF');
          }
        };
      };
    });

    it('turns 2 lights ON in the same row', () => {
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 0, 1);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i === 0 && j === 0) {
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
            expect(lightsGrid.grid[i][j+1].state).toEqual('ON');
            break;
          };
          expect(lightsGrid.grid[i][j].state).toEqual('OFF');
        };
      };
    });

    it('turns all lights ON in a row', () => {
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 0, 10);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i === 0 && j === 0) {
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
            expect(lightsGrid.grid[i][j+1].state).toEqual('ON');
            break;
          };
          expect(lightsGrid.grid[i][j].state).toEqual('OFF');
        };
      };
    });
  });
});