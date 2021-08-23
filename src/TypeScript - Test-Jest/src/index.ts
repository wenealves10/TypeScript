import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { FiftyPercentDiscount } from './classes/discount';
// import { MessagingProtocol } from './classes/interfaces/messaging-protocol';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

// const individualCustomer = new IndividualCustomer(
//   'Wene',
//   'Alves',
//   '000.000.000-00',
// );

const enterpriseCustomer = new EnterpriseCustomer(
  'WebTech',
  '000.000.000.-24/54',
);

// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('Mensagem enviada pelo class Mock...');
//   }
// }

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Shirt', 58.85));
shoppingCart.addItem(new Product('Shoes', 50.58));
shoppingCart.addItem(new Product('Hat', 18.75));
shoppingCart.addItem(new Product('Pants', 85.95));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
