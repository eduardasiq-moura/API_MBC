export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('instituicoes', [
    {
      instituicao_id: '001',
      nome: 'Banco Central do Brasil',
    },
    {
      instituicao_id: '002',
      nome: 'Itaú Unibanco',
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('instituicoes', null, {});
}
