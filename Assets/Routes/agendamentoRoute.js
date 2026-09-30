import {Router} from 'express';
import * as agendamentoController from '../Controller/agendamentoController.js';


const routes = Router();

routes.post('/', agendamentoController.salvarAgendamento);

routes.get('/', agendamentoController.agendamento);

export default routes;