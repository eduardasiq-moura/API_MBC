import app from './app.js'; // <– importa o app (Express configurado)
import './app/database/index.js';

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});




