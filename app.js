const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contacts');
const app = express();

require('./db');

app.use(express.json());

app.use('/api/contacts', contactRoutes);

module.exports = app;
