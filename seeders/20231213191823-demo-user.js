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
   return queryInterface.bulkInsert('Users', [
    {
      name: 'Johnny',
      email: 'johnny@gmail.com',
      password: 'hereisJohnny',
      role: 'user',
      createdAt: new Date(),
      upDatedAt: new Date()
    },
    {
      name: 'Sue',
      email: 'sue@gmail.com',
      password: 'notPeggy',
      role: 'user',
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
