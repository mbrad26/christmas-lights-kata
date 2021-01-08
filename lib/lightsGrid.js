const Light = require('./light');

class LightsGrid {
  constructor(Light) {
    this.grid = new Array(5).fill(new Array(5).fill(new Light()));
  }; 

  turnONLights = (sR, sC, eR, eC) => {
    console.log('THIS.GRID: ', this.grid);

    this.grid = new Array(5).fill(new Array(5).fill(new Light('ON')));
  };
};

exports.LightsGrid = LightsGrid;
