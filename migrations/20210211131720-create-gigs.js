'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gigs', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
      },
      technologies: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      // budget: {
      //   type: Sequelize.STRING,
      // },
      contact_email: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    }, {
      timestamps: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gigs');
  }
};