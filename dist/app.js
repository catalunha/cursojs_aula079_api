"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _home_routes = require('./routes/home_routes'); var _home_routes2 = _interopRequireDefault(_home_routes);
var _user_routes = require('./routes/user_routes'); var _user_routes2 = _interopRequireDefault(_user_routes);
var _token_routes = require('./routes/token_routes'); var _token_routes2 = _interopRequireDefault(_token_routes);
var _aluno_routes = require('./routes/aluno_routes'); var _aluno_routes2 = _interopRequireDefault(_aluno_routes);
var _foto_routes = require('./routes/foto_routes'); var _foto_routes2 = _interopRequireDefault(_foto_routes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home_routes2.default);
    this.app.use('/users', _user_routes2.default);
    this.app.use('/tokens', _token_routes2.default);
    this.app.use('/alunos', _aluno_routes2.default);
    this.app.use('/fotos', _foto_routes2.default);
  }
}
exports. default = new App().app;
