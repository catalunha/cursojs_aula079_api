"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loged_required = require('../middleware/loged_required'); var _loged_required2 = _interopRequireDefault(_loged_required);
// letra minuscula pois já é a instancia nao a classe
var _foto_controller = require('../controllers/foto_controller'); var _foto_controller2 = _interopRequireDefault(_foto_controller);

const router = new (0, _express.Router)();

// router.get('/', fotoController.index);
router.get('/', _foto_controller2.default.list);
router.post('/', _loged_required2.default, _foto_controller2.default.create);

exports. default = router;
