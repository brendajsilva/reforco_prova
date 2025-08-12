const Emprestimo = require('../model/Emprestimo')

const cadastroEmprestimos = async (req,res)=>{
    const valores = req.body
    try{
        const dados = await Emprestimo.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar emprestimo:', err)
        res.status(500).json({message: 'Erro ao cadastrar o emprestimo!'})
    }
}

const listarEmprestimos = async (req,res)=>{
    try{
        const dados = await Emprestimo.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar emprestimos:', err)
        res.status(500).json({message: 'Erro ao listar os emprestimos!'})
    }
}

const apagarEmprestimo = async (req,res)=>{
    const id = req.params.id
    try{
        const dad = await Emprestimo.findByPk(id)
        if(dad){
            await Emprestimo.destroy({where: {codEmprestimo: id}})
            res.status(200).json({message: 'Emprestimo apagado com sucesso!'})
        }else{
            res.status(404).json({message: 'Emprestimo não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao apagar emprestimo:', err)
        res.status(500).json({message: 'Erro ao apagar o emprestimo!'})
    }
}

const atualizarEmprestimo = async (req,res)=>{
    const id = req.params.id
    const novosValores = req.body
    try{
        const dad = await Emprestimo.findByPk(id)
        if(dad){
            await Emprestimo.update(novosValores, {where: {codEmprestimo: id}})
            res.status(200).json({message: 'Emprestimo atualizado com sucesso!'})
        }else{
            res.status(404).json({message: 'Emprestimo não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao atualizar emprestimo:', err)
        res.status(500).json({message: 'Erro ao atualizar o emprestimo!'})
    }
}

module.exports = { cadastroEmprestimos, listarEmprestimos, apagarEmprestimo, atualizarEmprestimo} 