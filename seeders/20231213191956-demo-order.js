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
   return queryInterface.bulkInsert('Orders', [
    {
      orderDate: new Date(),
      totalAmount: '',
      userId: '',
      createdAt: new Date(),
      upDatedAt: new Date()
    },
    {
      orderDate: new Date(),
      totalAmount: '',
      userId: '',
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
