import { Router } from 'express';
// letra minuscula pois já é a instancia nao a classe
import alunoController from '../controllers/aluno_controller';
import logedRequired from '../middleware/loged_required';

const router = new Router();

router.post('/', alunoController.create);
router.get('/', alunoController.list);
router.get('/:id', logedRequired, alunoController.read);
router.patch('/:id', alunoController.update);
// router.put('/:id', alunoController.change);
router.delete('/:id', alunoController.delete);

export default router;
