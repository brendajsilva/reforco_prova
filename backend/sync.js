const conn = require ('./db/conn')
const { Aluno, Livros, Emprestimo} = require('./model/rel')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('Tabelas criadas com sucesso!')
    }catch(err){
        console.error('Erro ao criar as tabelas:', err)
    }finally{
        conn.close()
        console.log('Conexão encerrada.')
    }
}
syncDataBase()