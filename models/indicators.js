'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indicators = sequelize.define('Indicators', {
    symbol: {
      allowNull: false,
      type: DataTypes.STRING(16)
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING(16)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    values: {
      allowNull: false,
      type: DataTypes.ENUM(1, 2, 3),
      defaultValue: 1
    }
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
