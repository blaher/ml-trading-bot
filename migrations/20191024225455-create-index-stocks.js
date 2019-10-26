'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('IndexStocks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER.UNSIGNED
        },
        indexId: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tableName: 'Indexes'
            },
            key: 'id'
          }
        },
        stockId: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tableName: 'Stocks'
            },
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, {
        uniqueKeys: {
          UNIQUE: {
            fields: ['indexId', 'stockId']
          }
        }
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('IndexStocks');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
