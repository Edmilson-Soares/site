const koaRouter = require("koa-router");
const router = new koaRouter();

const site = require('./site')
const auth = require('./auth')
const cliente = require('./cliente')

router.use(auth.routes()).use(auth.allowedMethods());
router.use(site.routes()).use(site.allowedMethods());
router.use(cliente.routes()).use(cliente.allowedMethods());

module.exports = router
