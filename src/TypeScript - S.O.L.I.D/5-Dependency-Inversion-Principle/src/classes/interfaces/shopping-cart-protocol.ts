import { ICartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<ICartItem[]>;

  addItem(item: ICartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
