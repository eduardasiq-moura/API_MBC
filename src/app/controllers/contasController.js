import Usuarios from '../models/user.js';
import Contas from '../models/contas.js';

const contasController = {
  async store(req, res) {
    const { cpf, nome, saldo, instituicao_id } = req.body

    // Validação dos campos obrigatórios
    if (!cpf || !nome || saldo === undefined || !instituicao_id) {
      return res.status(400).json({ erro: 'Campos obrigatórios' })
    }

    try {
      // Verifica se o usuário existe
      const usuario = await Usuarios.findOne({ where: { cpf } })
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' })
      }

      // Cria a conta
      const conta = await Contas.create({ cpf, nome, saldo, instituicao_id })
      return res.status(201).json(conta)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar conta.' + error.message })
    }
  },

  async index(req, res) {
    try {
      const contas = await Contas.findAll()
      return res.json(contas)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar contas.' + error.message })
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
  }
  
}

export default contasController
