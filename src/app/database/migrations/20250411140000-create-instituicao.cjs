module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instituicoes', { // <-- PLURAL
      instituicao_id: {
        primaryKey: true,
        type: Sequelize.STRING, 
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
