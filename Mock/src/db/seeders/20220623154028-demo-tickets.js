module.exports = {
  async up (queryInterface, Sequelize) {

   let _expired = new Date()
   _expired.setFullYear(2023,08,17)
   return queryInterface.bulkInsert('Tickets', [{
      name: 'waterboom',
      expired: _expired,
      placename: 'Zamsil',
      imgsrc: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb8hG48%2FbtrBXpiVEtW%2FXElfHKEsDCJ9lllKgWwOb1%2Fimg.png',
      weburl: 'http://waterbombfestival.com/',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
