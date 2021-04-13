const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
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
  });
