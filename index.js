const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

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

    app.listen(process.env.PORT || 5000, () => {
      console.log('Server started!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
