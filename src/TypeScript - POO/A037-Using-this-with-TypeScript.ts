export class Calc {
  constructor(public numberCalc: number) {}

  add(value: number): this {
    this.numberCalc += value;
    return this;
  }

  sub(value: number): this {
    this.numberCalc -= value;
    return this;
  }

  div(value: number): this {
    this.numberCalc /= value;
    return this;
  }

  mul(value: number): this {
    this.numberCalc *= value;
    return this;
  }
}

export class SubCalc extends Calc {
  pow(value: number): this {
    this.numberCalc **= value;
    return this;
  }
}

const calcOne = new Calc(10);
calcOne.add(5).div(3).mul(2).sub(1);
console.log(calcOne);

const subCalcOne = new SubCalc(10);
subCalcOne.add(2).pow(2);
console.log(subCalcOne);

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending with the method: ${this.method} via url: ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('post').setUrl('wenedev.site').send();
