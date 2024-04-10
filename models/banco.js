const Sequelize = require('sequelize')
const sequelize = new Sequelize('dsm','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Banco ativo!!')
}).catch(function(erro){
    console.log('falha ao conectar no banco: ' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}