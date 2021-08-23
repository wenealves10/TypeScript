import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido foi Salvo com sucesso.');
  }
}

export { Persistency };
