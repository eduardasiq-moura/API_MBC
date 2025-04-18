import Usuarios from '../models/user.js';
import Contas from '../models/contas.js';

const contasController = {
  
  async store(req, res) {
    const { cpf, nome, saldo, instituicao_id } = req.body;
  
    if (!cpf || !nome || saldo === undefined || !instituicao_id) {
      return res.status(400).json({ erro: 'Campos obrigatórios' });
    }
  
    try {
      const usuario = await Usuarios.findOne({ where: { cpf } });
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }
  
      // Verifica se já existe uma conta com o mesmo CPF e instituição
      const contaExistente = await Contas.findOne({
        where: { cpf, instituicao_id },
      });
  
      if (contaExistente) {
        return res.status(409).json({
          erro: 'Já existe uma conta com esse CPF nessa Instituição!',
        });
      }
  
      const conta = await Contas.create({ cpf, nome, saldo, instituicao_id });
      return res.status(201).json(conta);
    } catch (error) {
      return res
        .status(500)
        .json({ erro: 'Erro ao criar conta. ' + error.message });
    }
  },
  
  async index(req, res) {
    try {
      const contas = await Contas.findAll();
      return res.json(contas);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar contas. ' + error.message });
    }
  },

  async show(req, res) {
    const { cpf } = req.params;

    try {
      const conta = await Contas.findOne({ where: { cpf } });
      if (!conta) {
        return res.status(404).json({ erro: 'Conta não encontrada.' });
      }
      return res.json(conta);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar conta: ' + error.message });
    }
  },

  async getSaldoTotal(req, res) {
    const { cpf } = req.params;
  
    try {
      const contas = await Contas.findAll({
        where: { cpf },
        include: {
          model: Usuarios,
          as: 'usuario',
          attributes: ['nome'],
        },
      });
  
      if (!contas || contas.length === 0) {
        return res.status(404).json({ erro: 'Nenhuma conta encontrada para este CPF.' });
      }
  
      const saldoTotal = contas.reduce((total, conta) => total + conta.saldo, 0);
      const nome = contas[0].usuario?.nome || 'Nome não encontrado';
  
      return res.json({ cpf, nome, saldoTotal });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao obter saldo total. ' + error.message });
    }
  },
  
  async getSaldoPorInstituicao(req, res) {
    const { cpf, instituicao_id } = req.params;

    try {
      const conta = await Contas.findOne({ where: { cpf, instituicao_id } });

      if (!conta) {
        return res.status(404).json({ erro: 'Conta não encontrada para esta instituição.' });
      }

      return res.json({ cpf, instituicao_id, saldo: conta.saldo });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao obter saldo da instituição. ' + error.message });
    }
  }
};

export default contasController;
