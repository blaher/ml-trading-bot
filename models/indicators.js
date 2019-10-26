'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indicators = sequelize.define('Indicators', {
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

  Indicators.associate = function(models) {
    Indicators.belongsToMany(models.Indexes, {
      through: {
        model: models.IndexIndicators,
        unique: false
      },
      foreignKey: 'indicatorId'
    });
  };

  return Indicators;
};
