class Light {
  constructor(state = 'OFF') {
    this.state = state;
  };

  turnON() {
    this.state = 'ON';
  };

  turnOFF() {
    this.state = 'OFF';
  };
};

module.exports = Light;
