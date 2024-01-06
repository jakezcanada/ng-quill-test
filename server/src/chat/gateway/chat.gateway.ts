import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'events'
})export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendText')
  handleMessage(socket: Socket, message: any) {
    this.server.emit('newText', message);
  }

  handleConnection(): any {
    console.log('connection made');
  }

  handleDisconnect(): any {
    console.log('disconnected');
  }
}
