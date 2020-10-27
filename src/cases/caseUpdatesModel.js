const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CaseUpdates extends Model {
    static associate(models) {}
  }

  CaseUpdates.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    case_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    update_date: DataTypes.DATE,
    resolution: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CaseUpdates',
    underscored: true,
  });

  return CaseUpdates;
};
