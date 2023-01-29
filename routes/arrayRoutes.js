const express = require('express');
const arrayController = require('../controller/arrayController');

const {getArrayQuestions} = arrayController;

const Router = express.Router();

Router.route('/').get(getArrayQuestions);

module.exports = Router;