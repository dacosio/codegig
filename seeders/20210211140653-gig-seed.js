'use strict';
const {
  v4: uuid
} = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gigs', [{
      id: uuid(),
      title: 'Looking for a React developer',
      technologies: 'react, javascript, html, css',
      description: 'ce the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange',
      contact_email: 'user1@gmail.com',
      budget: '$3000',
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gigs', null, {});
  }
};
