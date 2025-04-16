import Sequelize from 'sequelize';
import dbConfig from '../../../config/database.js';
import Usuarios from '../models/user.js';
import Contas from '../models/contas.js';
import Instituicao from '../models/Instituicao.js';
import Transacao from '../models/transacoes.js';

const sequelize = new Sequelize(dbConfig);

const models = [Usuarios, Contas, Instituicao, Transacao];

// Inicializa os models
models.forEach(model => model.init(sequelize));

// Executa as associações (caso existam)
models.forEach(model => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export { sequelize };
export default sequelize.models;
