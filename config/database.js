const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
});