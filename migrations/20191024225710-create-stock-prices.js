'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('StockPrices', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER.UNSIGNED
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
        minute: {
          allowNull: false,
          type: Sequelize.DATE
        },
        open: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED
        },
        high: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED
        },
        low: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED
        },
        close: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED
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
            fields: ['stockId', 'minute']
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
      await queryInterface.dropTable('StockPrices');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
