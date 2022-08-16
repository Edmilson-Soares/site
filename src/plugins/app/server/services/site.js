'use strict';

module.exports = ({ strapi }) => ({
    index: async() => {
        let data = {}

        data.area = await strapi.db.query('api::area-de-atuacao.area-de-atuacao').findMany({});

        data.porque = []
        let a = await strapi.db.query('api::porque-escolher.porque-escolher').findMany({
            populate: {
                img: {
                    select: ['url']
                }
            }
        });

        data.porque = a;
        console.log(a)

        data.membros = await strapi.db.query('api::membro.membro').findMany({
            populate: {
                foto: {
                    select: ['url']
                }
            }
        });



        data.parcerias = await strapi.db.query('api::parceria.parceria').findMany({
            populate: {
                logo: {
                    select: ['url']
                }
            }
        });

        console.log(data, 'fff')
            // data.parcerias = []


        return data;
    },
    sobre: async() => {
        let data = {}


        data.membros = await strapi.db.query('api::membro.membro').findMany({
            populate: {
                foto: {
                    select: ['url']
                }
            }
        });

        data.parcerias = await strapi.db.query('api::parceria.parceria').findMany({
            populate: {
                logo: {
                    select: ['url']
                }
            }
        });




        return data;
    },
    servicos: async() => {
        let data = {}

        data.area = await strapi.db.query('api::area-de-atuacao.area-de-atuacao').findMany({});



        return data;
    },
    projetos: async() => {
        let data = {}

        data.projetos = await strapi.db.query('api::projeto.projeto').findMany({
            populate: {
                img: {
                    select: ['url']
                }
            }
        });



        return data;
    },
    produtos: async() => {
        let data = {}

        data.area = await strapi.db.query('api::area-de-atuacao.area-de-atuacao').findMany({});



        return data;
    },

    cursos: async() => {
        let data = {}

        data.cursos = await strapi.db.query('api::projeto.projeto').findMany({
            populate: {
                img: {
                    select: ['url']
                }
            }
        });



        return data;
    },
    eventos: async() => {
        let data = {}

        data.eventos = await strapi.db.query('api::projeto.projeto').findMany({
            populate: {
                img: {
                    select: ['url']
                }
            }
        });



        return data;
    },
});
