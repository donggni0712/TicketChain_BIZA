module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('TicketOwners', [{
      ticketid: 1,
      ownerskey: 'testwalletprivatekey',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TicketOwners', null, {});
  }
};
