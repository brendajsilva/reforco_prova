const { Sequelize} = require('sequelize')
const sequelize = new Sequelize('db_biblioteca', 'root', 'senai',{
    host: 'localhost',
    PORT: 3306,
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log('Conexão com o banco de dados realizada com sucesso!')
})
.catch((err)=>{
    console.error('Não foi possível conectar',err)
})

module.exports = sequelize 

