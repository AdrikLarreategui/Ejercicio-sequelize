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

    return queryInterface.bulkInsert('products', [
      {
        name: 'Steam',
        price: 200,
        CategoryId: 1,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        name: 'Playstation',
        price: 300,
        CategoryID: 2,
        createdAt: new Date(),
        upDatedAt: new Date()
    },
    {
        name: 'Nintendo',
        price: 100,
        CategoryID: 3,
        createdAt: new Date(),
      upDatedAt: new Date()
    },
    {
        name: 'Microsoft',
        price: 350,
        CategoryID: 4,
        createdAt: new Date(),
      upDatedAt: new Date()
    },
    {
        name: 'Percha',
        price: 3,
        CategoryID: 5,
        createdAt: new Date(),
        upDatedAt: new Date()
    }
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
