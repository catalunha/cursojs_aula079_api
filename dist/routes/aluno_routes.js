"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// letra minuscula pois já é a instancia nao a classe
var _aluno_controller = require('../controllers/aluno_controller'); var _aluno_controller2 = _interopRequireDefault(_aluno_controller);
var _loged_required = require('../middleware/loged_required'); var _loged_required2 = _interopRequireDefault(_loged_required);

const router = new (0, _express.Router)();

router.post('/', _aluno_controller2.default.create);
router.get('/', _aluno_controller2.default.list);
router.get('/:id', _loged_required2.default, _aluno_controller2.default.read);
router.patch('/:id', _aluno_controller2.default.update);
// router.put('/:id', alunoController.change);
router.delete('/:id', _aluno_controller2.default.delete);

exports. default = router;
