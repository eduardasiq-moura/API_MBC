import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController.js';
import userController from './app/controllers/userController.js';
import contasController from './app/controllers/contasController.js';
import transacoesController from './app/controllers/transacoesController.js';  // Importando o controlador de transações

const routes = new Router();

// Rotas para Instituições
routes.post('/instituicoes', instituicoesController.store);
routes.get('/instituicoes', instituicoesController.index);
// routes.get('/instituicoes/:id', instituicoesController.show);  // Rota para instituição específica

// Rotas para Usuários
routes.post('/usuarios', userController.store);
routes.get('/usuarios', userController.index);
routes.get('/usuarios/:cpf', userController.show);  // Rota para usuário específico

// Rotas para Contas
routes.post('/contas', contasController.store);
routes.get('/contas', contasController.index);
// routes.get('/contas/:cpf', contasController.show);  // Rota para contas de um usuário específico

// **Rotas para Transações** (Adicionadas)
routes.post('/transacoes', transacoesController.realizarTransacao);  // Criar uma nova transação
routes.get('/transacoes', transacoesController.getTransacoes);  // Ver todas as transações (opcional)
//routes.get('/transacoes/:transacao_id', transacoesController.show);  // Consultar transação específica pelo ID

export default routes;
