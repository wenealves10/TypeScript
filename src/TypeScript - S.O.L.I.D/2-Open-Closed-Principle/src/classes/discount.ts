abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * (this.discount / 100);
  }
}

class FiftyPercentDiscount extends Discount {
  protected readonly discount = 50;
}

class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}

class NoDiscount extends Discount {}

export { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount };
