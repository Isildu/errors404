// Obrir servidor: node server.js 

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ObsidianVogue.html'));
    // http://localhost:3000/ObsidianVogue.html	
});

// Contacte
app.get('/contacte', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/Contacto-ObsidianVogue.html'));
    // http://localhost:3000//Contacto%E2%80%93ObsidianVogue.html
});

// Productes
app.get('/productes', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Productos-ObsidianVogue.html'));
    // http://localhost:3000//Productos%E2%80%93ObsidianVogue.html
});

// Registre
app.get('/registre', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Registro-ObsidianVogue.html'));
    // http://localhost:3000//Registro%E2%80%93ObsidianVogue.html
});

// Sobre Nosaltres (amb espai)
app.get('/sobre-nosaltres', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Sobre Nosotros-ObsidianVogue.html'));
    // http://localhost:3000//Sobre%20Nosotros%E2%80%93ObsidianVogue.html
});

app.listen(PORT, () => {
  console.log(`Servidor funcionant a http://localhost:${PORT}`);
}); 