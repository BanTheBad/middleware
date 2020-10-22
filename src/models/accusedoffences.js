const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AccusedOffences extends Model {
    static associate(models) {}
  }

  AccusedOffences.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    accused_id: DataTypes.UUID,
    offence: {
      type: DataTypes.ENUM,
      values: [
        'MURDER', 'TORTURE', 'KIDNAPPING', 'EXTORTION', 'ROBBERY',
        'RAPE', 'ASSAULT', 'WAR_CRIMES', 'CRIMES_AGAINST_HUMANITY',
        'MANSLAUGHTER',
      ],
    },
    sentence: {
      type: DataTypes.ENUM,
      values: [
        'DISCHARGED', 'ACQUITTED', 'JAILED',
        'MONETARY', 'LIFE', 'DEATH', 'DISMISSED',
      ],
    },
    verdict_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'AccusedOffences',
    underscored: true,
  });

  return AccusedOffences;
};
