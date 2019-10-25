'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndexStocks = sequelize.define('IndexStocks', {
    indexId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'Indexes'
        },
        key: 'id'
      }
    },
    stockId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'Stocks',
          schema: 'schema'
        },
        key: 'id'
      }
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['indexId', 'stockId']
      }
    ]
  });

  IndexStocks.associate = function(models) {
    //IndexStocks.belongsTo(models.Indexes, {foreignKey: 'indexId'});
    //IndexStocks.belongsTo(models.Stocks, {foreignKey: 'stockId'});
  };

  return IndexStocks;
};
