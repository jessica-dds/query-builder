const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

// inserir registro na tabela agenda
app.get('/', async (req, res) => {

    // const jessica = {
    //     nome: 'Jéssica Gleizer 2',
    //     email: 'jessica2@email.com',
    //     telefone: '(99) 9999-9999'
    // }

    // inserir um registro no banco de dados com retorno do id e o nome
    // const agenda = await knex('agenda').insert(jessica).returning(['id', 'nome']);

    // inserir um registro no banco de dados com retorno de todos os campos do registro novo
    // const agenda = await knex('agenda').insert(jessica).returning('*');



    //  inserir mais de um registro no banco de dados com retorno de todos os campos dos registros novos
    const bruno = {
        nome: 'Bruno',
        email: 'bruno@email.com',
        telefone: '(99) 9999-9999'
    }

    const maria = {
        nome: 'Maria',
        email: 'maria@email.com',
        telefone: '(99) 9999-9999'
    }

    // const agenda = await knex('agenda').insert([bruno, maria]).returning('*');

    return res.json(agenda);
});

// atualizar registro na tabela agenda
app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where({ id }).returning('*');
    return res.json(agendaAtualizada);
});

// excluir registro na tabela agenda
app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda').del().where({ id }).returning('id');
    return res.json(agendaExcluida);
});

// incluir anotações
app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;

    const anotacao = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*');
    return res.json(anotacao);
});

// Join - agrupar registros 
app.get('/anotacoes', async (req, res) => {
    // const anotacoes = await knex('anotacoes')
    //     .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    const anotacoes = await knex('anotacoes')
        // left join
        .leftJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome');
    // right join
    // const anotacoes = await knex('anotacoes')
    //     .rightJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    return res.json(anotacoes);
});




app.listen(3000);