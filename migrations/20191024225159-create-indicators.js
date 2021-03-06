'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Indicators', {
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
        label: {
          allowNull: false,
          type: Sequelize.STRING(16)
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        values: {
          allowNull: false,
          type: Sequelize.ENUM('1', '2', '3'),
          defaultValue: '1'
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
            fields: ['symbol']
          }
        }
      });

      await transaction.commit();
    } catch(err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Indicators', {transaction});
      await transaction.commit();
    } catch(err) {
      await transaction.rollback();
      throw err;
    }
  }
};
