import Instituicao from '../models/Instituicao.js';

const instituicoesController = {
  async store(req, res) {
    const { nome, codigo } = req.body;

    if (!nome || !codigo) {
      return res.status(400).json({ erro: 'Nome e código são obrigatórios.' });
    }

    const instituicao = await Instituicao.create({ nome, codigo });
    return res.status(201).json(instituicao);
  },

  async index(req, res) {
    const todas = await Instituicao.findAll();
    return res.json(todas);
  }
};

export default instituicoesController;
