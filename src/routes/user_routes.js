import { Router } from 'express';
// letra minuscula pois já é a instancia nao a classe
import userController from '../controllers/user_controller';
import logedRequired from '../middleware/loged_required';

const router = new Router();

router.get('/', userController.list);
router.get('/:id', userController.read);

router.post('/', logedRequired, userController.create);
router.put('/', logedRequired, userController.update);
router.delete('/', logedRequired, userController.delete);

// situação em que podemos fazer crud livre no usuario
// router.post('/', userController.create);
// router.get('/', userController.list);
// // router.get('/', logedRequired, userController.list);
// router.get('/:id', logedRequired, userController.read);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);

export default router;
