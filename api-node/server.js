const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuració per servir arxius estàtics (CSS, JS, imatges)
app.use(express.static(path.join(__dirname, '../'))); // Puja 1 nivell des de `api-node`

// Ruta principal: ObsidianVogue.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ObsidianVogue.html')); // Puja 1 nivell ✅
});

// Ruta per a Contacte
app.get('/contacte', (req, res) => {
  res.sendFile(path.join(__dirname, '../Contacto-ObsidianVogue.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor funcionant a http://localhost:${PORT}`);
});