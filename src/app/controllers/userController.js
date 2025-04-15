import Usuarios from '../models/user.js';

const userController = {
  async store(req, res) {
    const { cpf, nome, data_nascimento } = req.body;

    if (!cpf || !nome || !data_nascimento) {
      return res.status(400).json({ erro: 'Os campos são obrigatórios.' });
    }

    try {
      // Verificar se o CPF já está cadastrado
      const usuarioExistente = await Usuarios.findOne({ where: { cpf } });
      if (usuarioExistente) {
        return res.status(409).json({ erro: 'CPF já cadastrado.' });
      }

      // Criar novo usuário
      const usuario = await Usuarios.create({ cpf, nome, data_nascimento });
      return res.status(201).json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar usuário: ' + error.message });
    }
  },

  async index(req, res) {
    try {
      const todos = await Usuarios.findAll();
      return res.json(todos);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar usuários: ' + error.message });
    }
  },

  async show(req, res) {
    const { cpf } = req.params;
  
    try {
      const usuario = await Usuarios.findByPk(cpf);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' });
      }
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar usuário: ' + error.message });
    }
  }
  
};

export default userController;
