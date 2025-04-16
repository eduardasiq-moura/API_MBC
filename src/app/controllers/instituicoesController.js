import Instituicao from '../models/Instituicao.js';

const instituicoesController = {
  async store(req, res) {
    const { nome, instituicao_id } = req.body;

    if (!nome || !instituicao_id) {
      return res.status(400).json({ erro: 'Nome e código são obrigatórios.' });
    }

    const instituicao = await Instituicao.create({ nome, instituicao_id });
    return res.status(201).json(instituicao);
  },

  async index(req, res) {
    const todas = await Instituicao.findAll();
    return res.json(todas);
  },

  async show(req, res) {
    const { id } = req.params;
  
    try {
      const instituicao = await Instituicao.findByPk(id);
      if (!instituicao) {
        return res.status(404).json({ erro: 'Instituição não encontrada.' });
      }
      return res.json(instituicao);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar instituição: ' + error.message });
    }
  }
  
};

export default instituicoesController;
