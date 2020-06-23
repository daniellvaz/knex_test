const express = require('express');
const routes = express.Router()

const UserController = require('./controlles/UserController')


routes.get('/users', UserController.inderx)


module.exports = routes