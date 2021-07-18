import { ICartItem } from './interfaces/cart-item';

class ShoppingCart {
  private readonly _items: ICartItem[] = [];

  addItem(item: ICartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Limpando o Carrinho...');
    this._items.length = 0;
  }

  get items(): Readonly<ICartItem[]> {
    return this._items;
  }
}

export { ShoppingCart };
