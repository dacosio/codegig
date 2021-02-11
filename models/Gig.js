const { SequelizeScopeError } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Gig = sequelize.define('gigs', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
    },
    technologies: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    budget: {
        type: Sequelize.STRING,
    },
    contact_email: {
        type: Sequelize.STRING,
    },
    
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})

module.exports = Gig;