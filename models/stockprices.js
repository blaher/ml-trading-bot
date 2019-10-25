'use strict';
module.exports = (sequelize, DataTypes) => {
  const StockPrices = sequelize.define('StockPrices', {
    stockId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'Stocks'
        },
        key: 'id'
      }
    },
    minute: {
      allowNull: false,
      type: DataTypes.DATE
    },
    open: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    high: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    low: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    close: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['stockId', 'minute']
      }
    ]
  });

  StockPrices.associate = function(models) {
    StockPrices.belongsTo(models.Stocks, {foreignKey: 'stockId'});
  };

  return StockPrices;
};
