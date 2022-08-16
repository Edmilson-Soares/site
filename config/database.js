const path = require('path');

module.exports = ({ env }) => {
    if (env('APP_ENV') == 'PRODUT') {

        return {
            connection: {
                client: 'postgres',
                connection: {
                    host: env('DATABASE_HOST', ''),
                    port: env.int('DATABASE_PORT', 5432),
                    database: env('DATABASE_NAME', ''),
                    user: env('DATABASE_USERNAME', ''),
                    password: env('DATABASE_PASSWORD', ''),
                    ssl: env.bool('DATABASE_SSL', false),
                },
            },
        }
    } else {

        console.log("e", env('APP_ENV'))
        return {
            connection: {
                client: 'sqlite',
                connection: {
                    filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
                },
                useNullAsDefault: true,
            },
        }
    }

}
