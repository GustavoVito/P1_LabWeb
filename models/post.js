const db = require('./banco')

const Agendamentos = db.sequelize.define('Agendamentos',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.TEXT
    },
    estado:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos
