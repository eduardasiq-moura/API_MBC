import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController.js';
import userController from './app/controllers/userController.js';
import contasController from './app/controllers/contasController.js';
import transacoesController from './app/controllers/transacoesController.js';

const routes = new Router();

/**
 * ROTAS DE INSTITUIÇÕES
 */
routes.post('/instituicoes', instituicoesController.store);
routes.get('/instituicoes', instituicoesController.index);
routes.get('/instituicoes/:id', instituicoesController.show); // Detalhe de uma instituição

/**
 * ROTAS DE USUÁRIOS
 */
routes.post('/usuarios', userController.store);
routes.get('/usuarios', userController.index);
routes.get('/usuarios/:cpf', userController.show); // Detalhe do usuário

/**
 * ROTAS DE CONTAS
 */
routes.post('/contas', contasController.store);
routes.get('/contas', contasController.index);

// ⚠️ Colocando rota de saldo por instituição antes da rota geral de contas por CPF para evitar conflito de rotas
routes.get('/usuarios/:cpf/saldo/:instituicao_id', contasController.getSaldoPorInstituicao);
routes.get('/usuarios/:cpf/saldo', contasController.getSaldoTotal);

// Agora sim a rota de contas por CPF
routes.get('/contas/:cpf', contasController.show);

/**
 * ROTAS DE TRANSAÇÕES
 */
routes.post('/transacoes', transacoesController.realizarTransacao);
routes.get('/transacoes/:cpf', transacoesController.getTransacoes);

// ⚠️ Esta rota precisa vir antes de `/:cpf`, senão o Express vai entender `transacoes/123` como transacao_id e não CPF
routes.get('/transacoes/id/:transacao_id', transacoesController.show);
routes.get('/transacoes/:cpf', transacoesController.getExtratoPorCpf); // ?instituicao_id=XYZ

export default routes;
