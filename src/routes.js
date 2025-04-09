import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController.js';

const routes = new Router();

// Instituições
routes.post('/instituicoes', instituicoesController.store);
routes.get('/instituicoes', instituicoesController.index);

export default routes;
