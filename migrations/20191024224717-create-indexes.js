'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Indexes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER.UNSIGNED
        },
        symbol: {
          allowNull: false,
          type: Sequelize.STRING(16)
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      await queryInterface.addIndex(
        'Indexes',
        ['symbol'],
        {
          indexName: 'UNIQUE',
          indicesType: 'UNIQUE'
        },
        {transaction}
      );

      await transaction.commit();
    } catch(err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Indexes', {transaction});
      await transaction.commit();
    } catch(err) {
      await transaction.rollback();
      throw err;
    }
  }
};
