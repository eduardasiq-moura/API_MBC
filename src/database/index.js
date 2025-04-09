import Sequelize from 'sequelize';
import Instituicao from '../app/models/Instituicao.js'; // ajuste o caminho se necessário

const sequelize = new Sequelize('open_finance', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // tira os logs no console
});

const models = [Instituicao];

models.forEach(model => model.init(sequelize));

sequelize.sync({ alter: true })
  .then(() => console.log('Tabelas sincronizadas com sucesso'))
  .catch((err) => console.error('Erro ao sincronizar tabelas', err));

export default sequelize;
