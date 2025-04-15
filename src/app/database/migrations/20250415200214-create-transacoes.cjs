// migrations/create-transacoes.cjs
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transacoes', {
      transacao_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'cpf',
        },
      },
      instituicao_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'instituicoes',
          key: 'instituicao_id',
        },
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('transacoes');
  },
};
