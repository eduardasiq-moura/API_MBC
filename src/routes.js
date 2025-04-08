import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController';
import contasController from './app/controllers/contasController';
import transacoesController from './app/controllers/transacoesController';
import saldosController from './app/controllers/saldosController';
import extratosController from './app/controllers/extratosController';

const routes = new Router();

// Instituições
routes.post('/instituicoes', instituicoesController.store);
routes.get('/instituicoes', instituicoesController.index);

// Contas
routes.post('/contas', contasController.store);
routes.get('/contas', contasController.index);

// Transações
routes.post('/transacoes', transacoesController.store);
routes.get('/transacoes', transacoesController.index);

// Saldos
routes.get('/saldos', saldosController.consolidado); // saldo total do usuário
routes.get('/saldos/:instituicaoId', saldosController.porInstituicao); // saldo por instituição

// Extratos
routes.get('/extratos', extratosController.consolidado); // extrato total do usuário
routes.get('/extratos/:instituicaoId', extratosController.porInstituicao); // extrato por instituição

export default routes;
