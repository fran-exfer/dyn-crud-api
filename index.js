const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
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

    // Allow CORS requests for all routes
    app.use(cors());
    app.options('*', cors());

    // Parse body as a JSON
    app.use(express.json());

    // Load routes
    app.use('/api', routes);

    app.listen(process.env.PORT || 5000, () => {
      console.log('Server started!');
    });
  })
  .catch((error) => {
    console.log(error);
  });
