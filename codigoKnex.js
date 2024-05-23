app.get('/', async (req, res) => {

    // SELECT

    // o mesmo que conexao.query('select * from agenda') 
    // const agenda = await knex('agenda').debug();

    // query bruta  
    // const agenda = await knex.raw('select * from agenda'); 


    // SELECT com WHERE

    // o mesmo que conexao.query('select * from agenda where id = $1, [5]')  // buscar registro com id = 5
    // const agenda = await knex('agenda').where('id', 5).debug(); 

    // buscar registros com id != 5
    // const agenda = await knex('agenda').where('id', '!=', 5).debug(); 

    // buscar registro com id = 5 e nome "alguma coisa"
    // const agenda = await knex('agenda').where({ id: 5, nome: "alguma coisa" }).debug(); 

    // buscar registro com id = 5
    // const agenda = await knex('agenda').where({ id: 5 }).debug(); 

    // com first = buscar o primeiro registro da consulta
    // const agenda = await knex('agenda').where({ id: 5 }).first().debug(); 

    // com o .select = seleciona os campos a serem buscados
    // const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug(); 


    // SELECT métodos auxiliares 

    // o mesmo que select * agenda where email is null 
    // const agenda = await knex('agenda').whereNull('email').debug();

    // o mesmo que select * agenda where email is not null 
    // const agenda = await knex('agenda').whereNotNull('email').debug();

    // o mesmo que select * from agenda where id between 5 and 10
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();

    // o mesmo que select * from agenda where id between 5 and 10 em ordem decrescente de id
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();


    // DISTINCT
    // campos de email e nome que não se repetem
    // const agenda = await knex('agenda').distinct('email', 'nome').debug();

    // Group by
    // o mesmo que select email from agenda group by email 
    // const agenda = await knex('agenda').select('email').groupBy('email').debug();


    // Group by e count 
    // o mesmo que select email, count(*) from agenda group by email
    //  const agenda = await knex('agenda').select('email').groupBy('email').count().debug();

    // limit 
    // const agenda = await knex('agenda').limit(5).debug();
    // const agenda = await knex('agenda').limit(5).offset(2).debug(); // exlcuindo os dois primeiros registros

    // count - quantidade de registros
    // const agenda = await knex('agenda').whereNull('email').count().debug();

    // sum - somar um campo específico
    // const agenda = await knex('agenda').whereNull('email').sum('id').debug();

    // avg - média 
    //const agenda = await knex('agenda').whereNull('email').avg('id').debug();

    // min - o menor valor de id onde o campo email é nulo g
    // const agenda = await knex('agenda').whereNull('email').min('id').debug();

    // max - o maior valor de id onde o campo email é nulo -
    // const agenda = await knex('agenda').whereNull('email').max('id').debug();

    return res.json(agenda);
});