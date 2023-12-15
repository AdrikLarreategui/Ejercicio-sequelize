'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Catergory', [
    {
      name: 'Hardware',
      description: 'Computers, PCs, Mac and video-consoles',
      createdAt: new Date(),
      upDatedAt: new Date()
    },
    {
      name: 'Electronics',
      description: 'TVs, Microwaves, Sound Systems and much more!',
      createdAt: new Date(),
      upDatedAt: new Date()
    },

   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
