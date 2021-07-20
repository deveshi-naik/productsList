require('@babel/register');
/* eslint-disable no-console */
const app = require('./app');

// listenig our app
app.listen(process.env.APP_PORT || 3000, () => {
  console.log('-------------------------START----------------------------');
  console.log(`Process ${process.pid} is listening to all incoming requests on ${process.env.APP_PORT}`);
});
