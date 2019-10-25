'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indexes = sequelize.define('Indexes', {
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

  Indexes.associate = function(models) {
    Indexes.belongsToMany(models.Stocks, {
      through: {
        model: models.IndexStocks,
        unique: false
      },
      foreignKey: 'indexId'
    });

    Indexes.belongsToMany(models.Indicators, {
      through: {
        model: models.IndexIndicators,
        unique: false
      },
      foreignKey: 'indexId'
    });

    Indexes.hasMany(models.IndexPrices);
  };

  return Indexes;
};
