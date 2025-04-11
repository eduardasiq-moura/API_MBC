module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('institucao', {
      institucao_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('instituicao');
  }
};
