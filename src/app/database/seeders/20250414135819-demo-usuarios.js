export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('usuarios', [
    {
      cpf: 12345678900,
      nome: 'Maria Silva',
      data_nascimento: new Date('1990-05-15'),
    },
    {
      cpf: 98765432100,
      nome: 'João Souza',
      data_nascimento: new Date('1985-08-23'),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usuarios', null, {});
}
