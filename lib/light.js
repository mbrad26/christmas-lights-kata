class Light {
  constructor() {
    this.state = 'OFF';
  };

  turnON() {
    this.state = 'ON';
  };

  turnOFF() {
    this.state = 'OFF';
  };
};

module.exports = Light;
