module.exports = {

    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '45m',
            },
        },
    },

    'web': {
        enabled: true,
        resolve: './src/plugins/web'
    },
    'app': {
        enabled: true,
        resolve: './src/plugins/app'
    },

}
