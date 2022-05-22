// Minha model

const Sequelize = require('sequelize');
const database = require('../database/db');

const Aluno = database.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    rga: {
        type: Sequelize.STRING,
        allowNull: false
    },
    situacao: {
        type: Sequelize.STRING,
    },
    curso: {
        type: Sequelize.STRING,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

})
module.exports = Aluno;