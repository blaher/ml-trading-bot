'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IndexIndicatorValues', {
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
      minute: {
        allowNull: false,
        type: Sequelize.DATE
      },
      value1: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      value2: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      value3: {
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
          fields: ['indexId', 'indicatorId', 'minute']
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IndexIndicatorValues');
  }
};
