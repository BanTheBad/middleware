const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EmailUpdate extends Model {
    static associate(models) {}
  }

  EmailUpdate.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.UUID
    // Not sure what should be here can be added later
  }, {
    sequelize,
    modelName: 'EmailUpdate',
    underscored: true,
  });

  return EmailUpdate;
};
