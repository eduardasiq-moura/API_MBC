import Sequelize from 'sequelize';
import dbConfig from '../config/database.js';

import Usuarios from '../app/models/Usuarios.js';
import Contas from '../app/models/Contas.js';
import Instituicao from '../app/models/Instituicao.js';

const sequelize = new Sequelize(dbConfig);

const models = [Usuarios, Contas, Instituicao];

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
