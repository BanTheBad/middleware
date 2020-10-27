const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Victim extends Model {
    static associate(models) {}
  }

  Victim.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    case_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    bio: DataTypes.STRING,
    twitter_handle: DataTypes.STRING,
    facebook_url: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Victim',
    underscored: true,
  });

  return Victim;
};
