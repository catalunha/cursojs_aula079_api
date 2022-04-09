"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// letra minuscula pois já é a instancia nao a classe
var _token_controller = require('../controllers/token_controller'); var _token_controller2 = _interopRequireDefault(_token_controller);

const router = new (0, _express.Router)();

router.post('/', _token_controller2.default.create);

exports. default = router;
