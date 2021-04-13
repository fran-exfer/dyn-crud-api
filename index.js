const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

console.log(process.env.dbhost);

/*
 * Only use dotenv if the enviroment variables are not already set.
 * This causes conflict with Heroku.
 */
if (!process.env.user) {
  dotenv.config();
}
const { user, passwd, dbhost, dbname } = process.env;

mongoose
  .connect(`mongodb+srv://${user}:${passwd}@${dbhost}/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.use('/api', routes);

    app.listen(process.env.port, () => {
      console.log('Server started!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
