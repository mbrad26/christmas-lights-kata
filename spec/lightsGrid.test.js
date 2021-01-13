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

      lightsGrid.turnONLights(0, 0, 0, 1);

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

      lightsGrid.turnONLights(0, 0, 0, 2);

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
      let count = 0;
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 0, 10);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i === 0) {
            count++
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
            continue;
          };
          expect(lightsGrid.grid[i][j].state).toEqual('OFF');
        };
      };

      expect(count).toEqual(10);
    });

    it('turns all lights ON in 2 rows', () => {
      let count = 0;
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 1, 10);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i <= 1) {
            count++;
            expect(lightsGrid.grid[i][j].state).toEqual('ON');
            continue;
          };
          expect(lightsGrid.grid[i][j].state).toEqual('OFF');
        };
      };

      expect(count).toEqual(20);
    });

    it('turns all lights ON in the first row and 3 lights in second row', () => {
      let count = 0;
      const lightsGrid = new LightsGrid(Light);

      lightsGrid.turnONLights(0, 0, 1, 3);

      for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
          if(i === 0 || (i == 1 && j <= 2)) {
            count++;
            expect(lightsGrid.grid[i][2].state).toEqual('ON');
            continue;
          };
          expect(lightsGrid.grid[i][j].state).toEqual('OFF');
        };
      };

      expect(count).toEqual(13);
    });

    it('throws an error when arguments are out of boundaries', () => {
      const lightsGrid = new LightsGrid(Light);

      expect(() => lightsGrid.turnONLights(-1, 0, 1, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(0, -1, 1, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(1, 0, -1, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(1, 0, 1, -1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(11, 0, 1, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(0, 11, 1, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(0, 0, 11, 1)).toThrowError('Out of boundaries!');
      expect(() => lightsGrid.turnONLights(0, 0, 1, 11)).toThrowError('Out of boundaries!');
    });

    it('throws an error when starting row is > ending row ', () => {
      const lightsGrid = new LightsGrid(Light);

      expect(() => lightsGrid.turnONLights(1, 0, 0, 1)).toThrowError('Starting row can\'t be less than ending row!');
    });
  });
});