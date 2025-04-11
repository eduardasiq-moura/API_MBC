import { user } from 'pg/lib/defaults';
import contas from '../models/contasjs';

const contasController = {
  async store(req, res) {
    const { cpf, nome, saldo } = req.body;

    if (!cpf|| !nome || !saldo) {
      return res.status(400).json({ erro: 'Os campos são obrigatórios.' });
    }

    const contas = await contas.create({ cpf, nome, saldo });
    return res.status(201).json(contas);
  },

  async index(req, res) {
    const todas = await contas.findAll();
    return res.json(todas)
  }
};

export default contasController;
