import { Router } from 'express';
// letra minuscula pois já é a instancia nao a classe
import tokenController from '../controllers/token_controller';

const router = new Router();

router.post('/', tokenController.create);

export default router;
