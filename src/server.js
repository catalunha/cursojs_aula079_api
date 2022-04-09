import app from './app';
// import appConfig from './config/app_config';

const port = process.env.APP_PORT;
// const { url } = appConfig;
app.listen(port);
// app.listen(port, () => {
//   console.log();
//   console.log(`Escutando ${port}`);
//   console.log(`http://${url}:${port}`);
// });
