const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    two_factor: DataTypes.BOOLEAN,
    role: DataTypes.ENUM('admin', 'contributor'),
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });

  return User;
};
