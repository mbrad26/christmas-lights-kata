class LightsGrid {
  constructor(Light) {
    let arr = [];

    for(let i = 0; i < 10; i++) {
      let row = [];
      for(let j = 0; j < 10; j++) {
        row.push(new Light());
      };
        arr.push(row);
    };

    this.grid = arr;
  }; 

  turnONLights = (sR, sC, eR, eC) => {
    for(let i = sR; i <= eR; i++) {
      for(let j = 0; j < 10; j++) {
        if(sC<=j && j<=eC ) {
          this.grid[i][j].turnON();
        };
      };
    };
  };
};

module.exports = LightsGrid;
