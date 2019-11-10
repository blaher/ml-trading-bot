'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'StockPrices',
        'previousHighDifference',
        {
          type: Sequelize.INTEGER.UNSIGNED
        },
        { transaction }
      );

      await queryInterface.addColumn(
        'StockPrices',
        'previousCloseDifference',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('StockPrices', 'previousHighDifference', { transaction });
      await queryInterface.removeColumn('StockPrices', 'previousCloseDifference', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
