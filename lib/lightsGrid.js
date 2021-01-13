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
    if(sR < 0 || sC < 0 || eR < 0 || eC < 0) throw 'Out of boundaries!';
    if(sR > 10 || sC > 10 || eR > 10 || eC > 10) throw 'Out of boundaries!';
    if(sR > eR) throw 'Starting row can\'t be less than ending row!';

    for(let i = sR; i <= eR; i++) {
      let limit = i === eR ? eC : 10;
      let start = sR !== eR ? 0 : sC 

      for(let j = start; j < limit; j++) {
        this.grid[i][j].turnON();
      };
    };
  };

  turnOFFLights = (sR, sC, eR, eC) => {
    this.grid[0][0].turnOFF();
  };
};

module.exports = LightsGrid;
