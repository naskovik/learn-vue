const mongoose = require('mongoose');
// const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

// config. dotenv
dotenv.config({
  path: '../.env'
});

// .env variables
const appPort = process.env.APP_PORT | 3000;
const dbPort = process.env.DB_PORT | 27017;
const host = process.env.HOST | 'localhost';
const apiName = process.env.API_NAME | 'api_rest_library';

// Mongoose deprecations

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Mongoose connections to MongoDB
mongoose.Promise = global.Promise;

try {
  mongoose.connect(`mongodb://${host}:${dbPort}/${apiName}`)
    .then(() => {
      console.log('Connected to MongoDB');
      // Start app server
      app.listen(appPort, () => console.log(`App listening on http://localhost:${appPort}`));
    });
} catch (error) {
  console.log(error);
}
// handle mongoose events
mongoose.connection.on('disconnected', () => console.log('Mongoose connection ended'));
mongoose.connection.on('error', (error) => {
  console.log(error);
  mongoose.connection.close();
});
mongoose.connection.on('reconnected', () => console.log('Succesfully reconnected'));
