"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
// import appConfig from './config/app_config';

const port = process.env.APP_PORT;
// const { url } = appConfig;
_app2.default.listen(port);
// app.listen(port, () => {
//   console.log();
//   console.log(`Escutando ${port}`);
//   console.log(`http://${url}:${port}`);
// });
