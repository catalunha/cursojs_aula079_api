"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// letra minuscula pois já é a instancia nao a classe
var _home_controller = require('../controllers/home_controller'); var _home_controller2 = _interopRequireDefault(_home_controller);

const router = new (0, _express.Router)();

router.get('/', _home_controller2.default.index);

exports. default = router;
