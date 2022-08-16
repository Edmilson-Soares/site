'use strict';

const register = require('./register');
const bootstrap = require('./bootstrap');
const destroy = require('./destroy');
const middlewares = require('./middlewares');
const policies = require('./policies');


module.exports = {
    register,
    bootstrap,
    destroy,
    policies,
    middlewares,
};
