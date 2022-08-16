const koaRouter = require("koa-router");
const router = new koaRouter({
    prefix: '/auth'
});




router.get("/", async(ctx) => {

    try {

        await ctx.redirect('/auth/login')
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/login", async(ctx) => {
    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('auth/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});










module.exports = router
