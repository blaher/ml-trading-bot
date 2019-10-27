'use strict';
module.exports = (sequelize, DataTypes) => {
  const IndexIndicatorValues = sequelize.define('IndexIndicatorValues', {
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
    },
    minute: {
      allowNull: false,
      type: DataTypes.DATE
    },
    value1: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    value2: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    value3: {
      type: DataTypes.INTEGER.UNSIGNED
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['indexId', 'indicatorId', 'minute']
      }
    ]
  });

  IndexIndicatorValues.associate = function(models) {
    // associations can be defined here
  };

  return IndexIndicatorValues;
};
