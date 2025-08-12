const Aluno = require('../model/Aluno')

const cadastroAluno = async (req,res)=>{
    const valores = req.body

    try{
        const dados = await Aluno.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar aluno:', err)
        res.status(500).json({message: 'Erro ao cadastrar o aluno!'})
    }
}

module.exports = { cadastroAluno}