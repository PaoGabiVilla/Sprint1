// Importar express
import express from 'express';

// Instanciar express
const app = express();
const PORT = 3000;

// Ruta GET con parámetros de consulta
// Solicitud http://localhost:3000/profile?edad=33
// Solicitud http://localhost:3000/profile?edad=33
app.get('/profile', (req, res) => {
    const edad = req.query.edad;  // Usamos req.query para acceder a los parámetros de consulta
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

// Escuchar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http:localhost:${PORT}`);
});