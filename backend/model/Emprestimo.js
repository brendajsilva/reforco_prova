const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Emprestimo = db.define('emprestimo',{
    codEmprestimo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codAluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'aluno',
            key: 'codAluno'
        }
    },
    codLivro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'livro',
            key: 'codLivro'
        }
    },
    dataEmprestimo: {
        type: DataTypes.STRING(10), 
        allowNull: false
    }
},{
    tableName: 'emprestimo',
    timestamps: false
})

module.exports = Emprestimo 