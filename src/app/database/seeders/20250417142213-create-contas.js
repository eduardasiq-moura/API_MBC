export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('contas', [
    {
      cpf: '12345678901',
      nome: 'João Silva',
      saldo: 1500.75,
      instituicao_id: '021',
    },
    {
      cpf: '12345678901',
      nome: 'João Silva',
      saldo: 800.00,
      instituicao_id: '005',
    },
    {
      cpf: '98765432100',
      nome: 'Maria Oliveira',
      saldo: 2450.00,
      instituicao_id: '122',
    },
    {
      cpf: '98765432100',
      nome: 'Maria Oliveira',
      saldo: 600.00,
      instituicao_id: '204',
    },
    {
      cpf: '11122233344',
      nome: 'Carlos Pereira',
      saldo: 800.50,
      instituicao_id: '103',
    },
    {
      cpf: '55566677788',
      nome: 'Ana Souza',
      saldo: 3200.00,
      instituicao_id: '204',
    },
    {
      cpf: '99988877766',
      nome: 'Fernanda Lima',
      saldo: 120.00,
      instituicao_id: '005',
    }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('contas', null, {});
}
