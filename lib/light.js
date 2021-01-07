class Cell {
  constructor() {
    this.state = 'OFF';
  };

  turnON() {
    this.state = 'ON';
  };
};

module.exports = Cell;
