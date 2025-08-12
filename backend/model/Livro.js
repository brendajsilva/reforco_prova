const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Livro = db.define('livro',{
    codLivro:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(80), //Foi definido como String de tamanho 80 pois alguns títulos podem ser longos
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    autor:{
        type: DataTypes.STRING(70), //Tamanho 70 para permitir autores com nomes mais longos
        allowNull: false
    }
},{
    tableName: 'livro',
    timestamps: false
})

module.exports = Livro 
