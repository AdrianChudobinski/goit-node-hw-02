const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/users', usersRouter);

module.exports = app;
