'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndexIndicators = sequelize.define('IndexIndicators', {
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
    indicatorId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: {
          tableName: 'Indicators'
        },
        key: 'id'
      }
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['indexId', 'indicatorId']
      }
    ]
  });

  IndexIndicators.associate = function(models) {
    //IndexIndicators.belongsTo(models.Indexes, {foreignKey: 'indexId'});
    //IndexIndicators.belongsTo(models.Indicators, {foreignKey: 'indicatorId'});
  };

  return IndexIndicators;
};
