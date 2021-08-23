import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('Mensagem foi envida:', message);
  }
}
export { Messaging };
