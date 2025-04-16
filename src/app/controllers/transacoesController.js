import Transacao from '../models/transacoes.js';
import Contas from '../models/contas.js';
import Instituicao from '../models/Instituicao.js';

const transacoesController = {
  async realizarTransacao(req, res) {
    const { cpf, instituicao_id, valor, descricao, tipo_transacao } = req.body;

    try {
      const conta = await Contas.findOne({ where: { cpf, instituicao_id } });
      if (!conta) {
        return res.status(404).json({ message: 'Conta não encontrada.' });
      }

      if (!['entrada', 'saida'].includes(tipo_transacao)) {
        return res.status(400).json({ message: 'Tipo de transação inválido.' });
      }

      let saldoAtual = parseFloat(conta.saldo);
      const valorFloat = parseFloat(valor);

      if (tipo_transacao === 'saida' && saldoAtual < valorFloat) {
        return res.status(400).json({ message: 'Saldo insuficiente.' });
      }

      const novoSaldo =
        tipo_transacao === 'entrada'
          ? saldoAtual + valorFloat
          : saldoAtual - valorFloat;

      await conta.update({ saldo: novoSaldo });

      const novaTransacao = await Transacao.create({
        cpf,
        instituicao_id,
        valor: valorFloat,
        descricao,
        tipo_transacao,
      });

      return res.status(201).json(novaTransacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao realizar transação.' });
    }
  },

  async getTransacoes(req, res) {
    const { cpf } = req.params;
    const { instituicao } = req.query;
  
    try {
      let transacoes;
  
      if (cpf) {
        if (instituicao) {
          transacoes = await Transacao.findAll({
            where: { cpf: String(cpf) },
            include: {
              model: Instituicao,
              where: { nome: instituicao },
              attributes: [],
            },
          });
        } else {
          transacoes = await Transacao.findAll({ where: { cpf: String(cpf) } });
        }
      } else {
        transacoes = await Transacao.findAll(); // <-- mostra todas
      }
  
      if (!transacoes || transacoes.length === 0) {
        return res.status(404).json({ message: 'Nenhuma transação encontrada.' });
      }
  
      return res.json(transacoes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar transações.' });
    }
  },
  

  async show(req, res) {
    const { transacao_id } = req.params;

    try {
      const transacao = await Transacao.findByPk(transacao_id);
      if (!transacao) {
        return res.status(404).json({ erro: 'Transação não encontrada.' });
      }
      return res.json(transacao);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar transação: ' + error.message });
    }
  },

  async getExtratoPorCpf(req, res) {
    const { cpf } = req.params;
    const { instituicao_id } = req.query;

    try {
      const transacoes = await Transacao.findAll({
        where: {
          cpf,
          ...(instituicao_id && { instituicao_id }),
        },
        include: [
          {
            model: Contas,
            as: 'conta',
            attributes: ['nome'],
          },
          {
            model: Instituicao,
            as: 'instituicao',
            attributes: ['nome'],
          },
        ],
        order: [['data', 'DESC']],
      });

      return res.json(transacoes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter extrato.' });
    }
  },
};

export default transacoesController;
