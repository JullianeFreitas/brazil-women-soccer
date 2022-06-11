const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const squadRoute = require('./routes/squadRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use('/squad', squadRoute);
module.exports = app;