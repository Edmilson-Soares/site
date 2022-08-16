const koaRouter = require("koa-router");
const router = new koaRouter({
    prefix: '/cliente'
});




router.get("/", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/produtos", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/produtos', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/pedidos", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/faturas", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/servicos", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});



router.get("/perfil", async(ctx) => {

    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('client/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});









module.exports = router
