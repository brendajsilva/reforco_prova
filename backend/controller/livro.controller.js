const Livro = require('../model/Livro')

const cadastroLivro = async (req,res)=>{
    const valores = req.body

    try{
        const dados = await Livro.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar livro:', err)
        res.status(500).json({message: 'Erro ao cadastrar o livro!'})
    }
}

module.exports = { cadastroLivro}