export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('transacoes', [
    // João Silva
    {
      cpf: '12345678901',
      instituicao_id: '021',
      valor: 1000.00,
      descricao: 'Salário',
      tipo_transacao: 'entrada',
      data: new Date('2025-04-01'),
    },
    {
      cpf: '12345678901',
      instituicao_id: '005',
      valor: 150.00,
      descricao: 'Assinatura streaming',
      tipo_transacao: 'saida',
      data: new Date('2025-04-03'),
    },

    // Maria Oliveira
    {
      cpf: '98765432100',
      instituicao_id: '122',
      valor: 300.00,
      descricao: 'Pagamento de conta',
      tipo_transacao: 'saida',
      data: new Date('2025-04-05'),
    },
    {
      cpf: '98765432100',
      instituicao_id: '204',
      valor: 1000.00,
      descricao: 'Transferência recebida',
      tipo_transacao: 'entrada',
      data: new Date('2025-04-06'),
    },

    // Carlos Pereira
    {
      cpf: '11122233344',
      instituicao_id: '103',
      valor: 200.00,
      descricao: 'TED recebida',
      tipo_transacao: 'entrada',
      data: new Date('2025-04-07'),
    },

    // Ana Souza
    {
      cpf: '55566677788',
      instituicao_id: '204',
      valor: 500.00,
      descricao: 'Compra viagem',
      tipo_transacao: 'saida',
      data: new Date('2025-04-08'),
    },

    // Fernanda Lima
    {
      cpf: '99988877766',
      instituicao_id: '005',
      valor: 750.00,
      descricao: 'Pagamento serviço',
      tipo_transacao: 'saida',
      data: new Date('2025-04-10'),
    }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('transacoes', null, {});
}
