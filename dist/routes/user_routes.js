"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// letra minuscula pois já é a instancia nao a classe
var _user_controller = require('../controllers/user_controller'); var _user_controller2 = _interopRequireDefault(_user_controller);
var _loged_required = require('../middleware/loged_required'); var _loged_required2 = _interopRequireDefault(_loged_required);

const router = new (0, _express.Router)();

router.get('/', _user_controller2.default.list);
router.get('/:id', _user_controller2.default.read);

router.post('/', _loged_required2.default, _user_controller2.default.create);
router.put('/', _loged_required2.default, _user_controller2.default.update);
router.delete('/', _loged_required2.default, _user_controller2.default.delete);

// situação em que podemos fazer crud livre no usuario
// router.post('/', userController.create);
// router.get('/', userController.list);
// // router.get('/', logedRequired, userController.list);
// router.get('/:id', logedRequired, userController.read);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);

exports. default = router;
