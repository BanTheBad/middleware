module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AccusedOffences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      accused_id: {
        type: Sequelize.UUID,
      },
      offence: {
        type: Sequelize.ENUM,
        values: [
          'MURDER', 'TORTURE', 'KIDNAPPING', 'EXTORTION', 'ROBBERY',
          'RAPE', 'ASSAULT', 'WAR_CRIMES', 'CRIMES_AGAINST_HUMANITY',
          'MANSLAUGHTER',
        ],
      },
      sentence: {
        type: Sequelize.ENUM,
        values: [
          'DISCHARGED', 'ACQUITTED', 'JAILED',
          'MONETARY', 'LIFE', 'DEATH', 'DISMISSED',
        ],
      },
      verdict_date: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('AccusedOffences');
  },
};
