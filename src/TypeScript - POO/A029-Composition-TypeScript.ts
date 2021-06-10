export class Car {
  private readonly motor = new Motor();

  switchedOn(): void {
    this.motor.switchedOn();
  }

  stop(): void {
    this.motor.stop();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  toSwitchOff(): void {
    this.motor.toSwitchOff();
  }
}

export class Motor {
  switchedOn(): void {
    console.log('Motor is switched on');
  }

  stop(): void {
    console.log('Motor is stopping');
  }

  speedUp(): void {
    console.log('Motor is speed up');
  }

  toSwitchOff(): void {
    console.log('Motor is to switch off');
  }
}

const carOne = new Car();
carOne.switchedOn();
carOne.speedUp();
carOne.stop();
carOne.toSwitchOff();
