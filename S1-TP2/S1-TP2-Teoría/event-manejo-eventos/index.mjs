//EventEmitter es una clase incorporada en Node.js que permite manejar eventos personalizados.
//  Se crea una instancia llamada emitter que funcionará como un emisor de eventos.

import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.on('mensaje', (data) => console.log('Mensaje recibido:', data)); 
emitter.emit('mensaje', 'iHola,  Node.js!');

