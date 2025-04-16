module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contas', {
      conta_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios', // tabela que representa os usuários
          key: 'cpf',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('contas');
  }
};
