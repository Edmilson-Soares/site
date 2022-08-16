'use strict';
const render = require('koa-ejs');
const path = require('path');
const sistema = require('./routes/router')
module.exports = ({ strapi }) => {
    // registeration phase

    render(strapi.server.app, {
        root: path.join(__dirname, 'views'),
        viewExt: 'ejs',
        "layout": false,
        cache: false,
        debug: false
    });


    strapi.server.app.use(sistema.routes()).use(sistema.allowedMethods());

};
