import { ICartItem } from './interfaces/cart-item';

class Product implements ICartItem {
  constructor(public name: string, public price: number) {}
}

export { Product };
