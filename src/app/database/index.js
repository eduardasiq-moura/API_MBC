import Sequelize from 'sequelize';
import Instituicao from '../app/models/Instituicao.js'; // ajuste o caminho se necessário

const sequelize = new Sequelize('open_finance', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const models = [Instituicao];

// Inicializa os models
models.forEach(model => model.init(sequelize));

export default sequelize;
