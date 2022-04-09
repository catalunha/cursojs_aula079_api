import { Router } from 'express';
// letra minuscula pois já é a instancia nao a classe
import homeController from '../controllers/home_controller';

const router = new Router();

router.get('/', homeController.index);

export default router;
