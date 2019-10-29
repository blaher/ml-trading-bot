'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndexPrices = sequelize.define('IndexPrices', {
    indexId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'Indexs'
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
    },
    futurePrice: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    trade: DataTypes.ENUM('sell', 'buy')
  }, {
    indexes: [
      {
        unique: true,
        fields: ['indexId', 'minute']
      }
    ]
  });

  IndexPrices.associate = function(models) {
    IndexPrices.belongsTo(models.Indexes, {foreignKey: 'indexId'});
  };

  return IndexPrices;
};
