import { Router } from 'express';

import instituicoesController from './app/controllers/instituicoesController.js'
import userController from './app/controllers/userController.js'
import contasController from './app/controllers/contasController.js'

const routes = new Router();

// Instituições
routes.post('/instituicoes', instituicoesController.store)
routes.get('/instituicoes', instituicoesController.index)
//routes.get('/instituicoes/:id', instituicoesController.show); inst especifica

routes.post('/usuarios', userController.store)
routes.get('/usuarios', userController.index)
//routes.get('/usuarios/:cpf', userController.show);  usuario espeficio

export default routes;
