module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contas', {
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'usuarios', // tabela que representa os usuários
          key: 'cpf',
        },
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      instituicao_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'instituicoes',
          key: 'instituicao_id',
        },
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('contas');
  }
};
