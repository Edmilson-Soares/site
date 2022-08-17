const koaRouter = require("koa-router");
const router = new koaRouter({
    prefix: '/auth'
});




router.get("/", async(ctx) => {

    try {

        console.log(process.env.APP_ENV)

        if (process.env.APP_ENV == 'PRODUT') {

            await ctx.redirect('https://auth.microaitec.pt/login')
        } else {

            await ctx.redirect('/auth/login')
        }

    } catch (err) {
        ctx.body = err;
    }
});


router.get("/login", async(ctx) => {
    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('auth/index', { data, env: process.env.APP_ENV });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/register", async(ctx) => {
    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('auth/register', { data, env: process.env.APP_ENV });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/forgot-password", async(ctx) => {
    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('auth/forgot', { data, env: process.env.APP_ENV });
    } catch (err) {
        ctx.body = err;
    }
});











module.exports = router
