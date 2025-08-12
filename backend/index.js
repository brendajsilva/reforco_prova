const express = require('express')
const app = express()
const cors = require('cors')

conn = require('./db/conn')

const hostname = 'localhost'
const PORT = 3000

const alunoController = require('./controller/aluno.controller')
const livroController = require('./controller/livro.controller')
const emprestimoContoller = require('./controller/emprestimo.controller')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//-------------Middleware--------------------------------------------//
app.post('/aluno', alunoController.cadastroAluno)

app.post('/livro', livroController.cadastroLivro)

app.post('/emprestimo', emprestimoContoller.cadastroEmprestimos)
app.get('/emprestimo', emprestimoContoller.listarEmprestimos)
app.delete('/emprestimo/:id', emprestimoContoller.apagarEmprestimo)
app.put('/emprestimo/:id', emprestimoContoller.atualizarEmprestimo)



app.get('/', ()=>{
    console.log('API rodando')
})
//---------------------------------------------------------------------//

conn.sync()

.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.log('Erro ao conectar com o banco de dados:', err)
})
//------------------------------FIM------------------------------------//


