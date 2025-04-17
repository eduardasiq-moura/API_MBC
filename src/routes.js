import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController.js';
import userController from './app/controllers/userController.js';
import contasController from './app/controllers/contasController.js';
import transacoesController from './app/controllers/transacoesController.js';

const routes = new Router();

// Instituições
routes.post('/instituicoes', instituicoesController.store);
routes.get('/instituicoes', instituicoesController.index);
routes.get('/instituicoes/:id', instituicoesController.show);

// Usuários
routes.post('/usuarios', userController.store);
routes.get('/usuarios', userController.index);
routes.get('/usuarios/:cpf', userController.show);

// Contas
routes.post('/contas', contasController.store);
routes.get('/contas', contasController.index);
routes.get('/usuarios/:cpf/saldo/:instituicao_id', contasController.getSaldoPorInstituicao);
routes.get('/usuarios/:cpf/saldo', contasController.getSaldoTotal);
routes.get('/contas/:cpf', contasController.show);

// Transações
routes.post('/transacoes', transacoesController.realizarTransacao);
routes.get('/transacoes/id/:transacao_id', transacoesController.show);
routes.get('/transacoes/:cpf', transacoesController.getTransacoes);
routes.get('/transacoes/:cpf/extrato', transacoesController.getExtratoPorCpf);

export default routes;
