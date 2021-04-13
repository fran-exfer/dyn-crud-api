const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const { user, passwd, dbhost, dbname } = process.env;

console.log(user, passwd, dbhost, dbname);

mongoose
  .connect(`mongodb+srv://${user}:${passwd}@${dbhost}/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.use('/api', routes);

    app.listen(5000, () => {
      console.log('Server started!');
    });
  });
