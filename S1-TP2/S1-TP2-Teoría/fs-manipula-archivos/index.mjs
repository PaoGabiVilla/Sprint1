import fs from 'fs';
fs.writeFileSync('example.txt', 'Hola, Node.js! Soy Paola');
console.log(fs.readFileSync('example.txt', 'utf8'));
