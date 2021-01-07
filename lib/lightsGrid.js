class LightsGrid {
  constructor(Light) {
    this.grid = new Array(10).fill(new Array(10).fill(new Light()));
  }; 
};

exports.LightsGrid = LightsGrid;
