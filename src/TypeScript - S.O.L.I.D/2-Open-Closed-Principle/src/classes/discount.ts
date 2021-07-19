abstract class Discount {
  abstract calculate(price: number): number;
}

class FiftyPercentDiscount extends Discount {
  private readonly discount = 50;
  calculate(price: number): number {
    return price - price * (this.discount / 100);
  }
}

class TenPercentDiscount extends Discount {
  private readonly discount = 10;
  calculate(price: number): number {
    return price - price * (this.discount / 100);
  }
}

class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}

export { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount };
