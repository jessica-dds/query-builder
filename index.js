const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    // SELECT
    // o mesmo que conexao.query('select * from agenda') 
    // const agenda = await knex('agenda').debug();
    // const agenda = await knex.raw('select * from agenda'); // query bruta  

    // SELECT com WHERE
    // o mesmo que conexao.query('select * from agenda where id = $1, [5]') 
    // const agenda = await knex('agenda').where('id', 5).debug(); // buscar registro com id = 5
    // const agenda = await knex('agenda').where('id', '!=', 5).debug(); // buscar registros com id != 5
    // const agenda = await knex('agenda').where({ id: 5, nome: "alguma coisa" }).debug(); // buscar registro com id = 5 e nome "alguma coisa"
    // const agenda = await knex('agenda').where({ id: 5 }).debug(); // buscar registro com id = 5
    //const agenda = await knex('agenda').where({ id: 5 }).first().debug(); // com first = buscar o primeiro registro da consulta
    const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug(); // com o .select = seleciona os campos a serem buscados

    return res.json(agenda);
});

app.listen(3000);