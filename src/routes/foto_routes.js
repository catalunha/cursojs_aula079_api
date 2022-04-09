import { Router } from 'express';
import logedRequired from '../middleware/loged_required';
// letra minuscula pois já é a instancia nao a classe
import fotoController from '../controllers/foto_controller';

const router = new Router();

// router.get('/', fotoController.index);
router.get('/', fotoController.list);
router.post('/', logedRequired, fotoController.create);

export default router;
