export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('usuarios', [
    {
      cpf: '12345678901',
      nome: 'João Silva',
      data_nascimento: new Date('1990-05-10'),
    },
    {
      cpf: '98765432100',
      nome: 'Maria Oliveira',
      data_nascimento: new Date('1985-08-22'),
    },
    {
      cpf: '11122233344',
      nome: 'Carlos Pereira',
      data_nascimento: new Date('1978-03-15'),
    },
    {
      cpf: '55566677788',
      nome: 'Ana Souza',
      data_nascimento: new Date('1992-12-01'),
    },
    {
      cpf: '99988877766',
      nome: 'Fernanda Lima',
      data_nascimento: new Date('2000-07-30'),
    }
  ], {})
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usuarios', null, {});
}
