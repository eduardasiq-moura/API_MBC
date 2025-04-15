import Transacao from '../models/transacoes.js'
import Contas from '../models/contas.js';
import Instituicao from '../models/Instituicao.js';


const realizarTransacao = async (req, res) => {
  const { cpf, instituicao_id, valor, descricao } = req.body;

  try {
    const usuarioExistente = await Contas.findOne({ where: { cpf } });
    if (!usuarioExistente) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const instituicaoExistente = await Instituicao.findOne({ where: { instituicao_id } });
    if (!instituicaoExistente) {
      return res.status(404).json({ message: 'Instituição não encontrada.' });
    }

    const novaTransacao = await Transacao.create({
      cpf,
      instituicao_id,
      valor,
      descricao,
    });

    return res.status(201).json(novaTransacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao realizar transação.' });
  }
};

const getTransacoes = async (req, res) => {
  const { cpf } = req.params;
  const { instituicao } = req.query;

  try {
    let transacoes;

    if (instituicao) {
      transacoes = await Transacao.findAll({
        where: { cpf },
        include: {
          model: Instituicao,
          where: { nome: instituicao },
          attributes: [],
        },
      });
    } else {
      transacoes = await Transacao.findAll({ where: { cpf } });
    }

    if (!transacoes || transacoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma transação encontrada.' });
    }

    return res.json(transacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar transações.' });
  }
};





export default {
  realizarTransacao,
  getTransacoes
};
