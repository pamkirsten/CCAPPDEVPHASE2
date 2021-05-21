const express = require('express');
const controller = require('../controllers/controller.js');

const app = express();

app.get('/', controller.getIndex);
app.get('/signup', controller.getRegister);
app.post('/signup', controller.createRegister);
app.get('/login', controller.getLogin);
app.post('/login', controller.goLogin);

module.exports = app;   