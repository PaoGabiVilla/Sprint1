//Creación de servidores web
//Permite construir servicores HTTP sin frameworks adicionales

import http from 'http' ;
const server = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end( ' i Hola desde Node.js! ' ) ;
} ) ;
server.listen(3000, () => console.log('Servidor en http://localhost:3000'));


