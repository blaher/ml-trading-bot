'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'IndexPrices',
        'futureHigh',
        {
          type: Sequelize.INTEGER.UNSIGNED
        },
        { transaction }
      );

      await queryInterface.addColumn(
        'IndexPrices',
        'futureHighCloseDelta',
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
      await queryInterface.removeColumn('IndexPrices', 'futureHigh', { transaction });
      await queryInterface.removeColumn('IndexPrices', 'futureHighCloseDelta', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
