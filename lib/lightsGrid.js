class LightsGrid {
  constructor(Light) {
    let arr = [];

    for(let i = 0; i < 5; i++) {
      let row = [];
      for(let j = 0; j < 5; j++) {
        row.push(new Light());
      };
        arr.push(row);
    };

    this.grid = arr;
  }; 

  turnONLights = (sR, sC, eR, eC) => {
    this.grid[sR][sC].turnON();
  };
};

module.exports = LightsGrid;
