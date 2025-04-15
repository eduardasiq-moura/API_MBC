module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instituicoes', { // <-- PLURAL
      instituicao_id: {
        primaryKey: true,
        type: Sequelize.INTEGER, // <-- mudar de STRING para INTEGER se for usar assim no relacionamento
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('instituicoes');
  }
};
