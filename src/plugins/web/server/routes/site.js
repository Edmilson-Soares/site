const koaRouter = require("koa-router");
const router = new koaRouter();




router.get("/", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').index();
        await ctx.render('site/index', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/sobre", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').sobre();
        await ctx.render('site/sobre', { data });
    } catch (err) {
        ctx.body = err;
    }
});



router.get("/servicos", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').servicos();
        await ctx.render('site/servicos', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/projetos", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').projetos();
        await ctx.render('site/projetos', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/produtos", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').produtos();
        await ctx.render('site/produtos', { data });
    } catch (err) {
        ctx.body = err;
    }
});


router.get("/cursos", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').cursos();
        await ctx.render('site/cursos', { data });
    } catch (err) {
        ctx.body = err;
    }
});



router.get("/eventos", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').eventos();
        await ctx.render('site/eventos', { data });
    } catch (err) {
        ctx.body = err;
    }
});



router.get("/contato", async(ctx) => {


    try {
        const data = await strapi.plugin('app').service('site').eventos();
        await ctx.render('site/contatos', { data });
    } catch (err) {
        ctx.body = err;
    }
});








module.exports = router
