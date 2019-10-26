'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('IndexIndicators', {
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
        indicatorId: {
          allowNull: false,
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tableName: 'Indicators'
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
            fields: ['indexId', 'indicatorId']
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
      await queryInterface.dropTable('IndexIndicators');
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
