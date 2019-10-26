'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Indexes', [{
      id: 1,
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF Trust',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Indexes', null, {});
  }
};
