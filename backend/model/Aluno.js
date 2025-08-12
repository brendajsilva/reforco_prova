    const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Aluno = db.define('aluno',{
    codAluno:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50), //Foi definido como String de tamanho 50 pois alguns nomes podem ser longos
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING(30), //Tamanho 30 para permitir matrículas mais longas
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(60), //Tamanho 60 para permitir emails mais longos
        allowNull: false
    }
},{
    tableName: 'aluno',
    timestamps: false
})

module.exports = Aluno 