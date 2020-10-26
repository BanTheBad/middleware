const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    static associate(models) {}
  }

  Case.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.UUID,
    title: DataTypes.STRING,
    plaintiff: DataTypes.STRING,
    defendants: DataTypes.STRING,
    details_of_motion: DataTypes.TEXT,
    court: DataTypes.STRING,
    date_of_filing: DataTypes.DATE,
    judge: DataTypes.STRING,
    last_sitting_date: DataTypes.DATE,
    verdict: {
      type: DataTypes.ENUM,
      values: ['GUILTY', 'NOT_GUILTY'],
    },
  }, {
    sequelize,
    modelName: 'Case',
    underscored: true,
  });

  return Case;
};
