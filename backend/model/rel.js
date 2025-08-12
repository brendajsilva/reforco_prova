const Aluno = require('./Aluno')
const Livro = require('./Livro')
const Emprestimo = require('./Emprestimo')

Aluno.hasMany(Emprestimo,{
    foreignKey: 'codAluno',
    as: 'emprestimoAluno',
    onDelete: 'CASCADE'
})

Emprestimo.belongsTo(Aluno,{
    foreignKey: 'codAluno',
    as: 'alunoEmprestimo',
    allowNull: false
})

Livro.hasMany(Emprestimo,{
    foreignKey: 'codLivro',
    as: 'emprestimosLivro',
    onDelete: 'CASCADE'
})

Emprestimo.belongsTo(Livro,{
    foreignKey: 'codLivro',
    as: 'livroEmprestimo',
    allowNull: false
})

module.exports = { Aluno, Livro, Emprestimo }