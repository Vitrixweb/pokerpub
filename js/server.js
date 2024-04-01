const express = require('express');
const app = express();
const path = require('path');

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Torneios.html'));
});

// Porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});