'use strict';

const register = require('./register');
const bootstrap = require('./bootstrap');
const destroy = require('./destroy');
const config = require('./config');
const services = require('./services');

module.exports = {
    register,
    bootstrap,
    destroy,
    config,
    services
};
