const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Accused extends Model {
    static associate(models) {}
  }

  Accused.init({
    case_id: DataTypes.UUID,
    full_name: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    service_branch: DataTypes.UUID,
    rank: DataTypes.STRING,
    supervising_officer_name: DataTypes.STRING,
    supervising_officer_rank: DataTypes.STRING,
    posting_state: DataTypes.STRING,
    office_address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Accused',
    underscored: true,
  });

  return Accused;
};
