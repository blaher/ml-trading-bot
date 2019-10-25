'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stocks = sequelize.define('Stocks', {
    symbol: {
      allowNull: false,
      type: DataTypes.STRING(16)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['symbol']
      }
    ]
  });

  Stocks.associate = function(models) {
    Stocks.belongsToMany(models.Indexes, {
      through: {
        model: models.IndexStocks,
        unique: false
      },
      foreignKey: 'stockId'
    });
  };

  return Stocks;
};
