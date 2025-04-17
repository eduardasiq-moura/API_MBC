export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('instituicoes', [
    {
      instituicao_id: '021',
      nome: 'Banco do Brasil',
    },
    {
      instituicao_id: '122',
      nome: 'Itaú Unibanco',
    },
    {
      instituicao_id: '103',
      nome: 'Caixa Econômica Federal',
    },
    {
      instituicao_id: '204',
      nome: 'Banco Santander',
    },
    {
      instituicao_id: '005',
      nome: 'Nubank ',
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('instituicoes', null, {});
}
