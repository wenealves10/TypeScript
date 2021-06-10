export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityOfProducts(): number {
    return this.products.length;
  }

  amount(): number {
    return Math.round(
      this.products.reduce((sum, product) => sum + product.price, 0),
    );
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const productOne = new Product('Shirt', 50.99);
const productTwo = new Product('Shoes', 100.78);
const productThree = new Product('Red Hat', 28.99);

const shoppingCartOne = new ShoppingCart();

shoppingCartOne.insertProducts(productOne, productTwo, productThree);
console.log(shoppingCartOne.quantityOfProducts());
console.log(shoppingCartOne.amount());
