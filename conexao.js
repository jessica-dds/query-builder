const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '2808',
        database: 'knexjs',
    },
});

module.exports = knex;