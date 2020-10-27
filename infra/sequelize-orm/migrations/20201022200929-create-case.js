module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: {
        type: Sequelize.UUID,
      },
      title: {
        type: Sequelize.STRING,
      },
      plaintiff: {
        type: Sequelize.STRING,
      },
      defendants: {
        type: Sequelize.STRING,
      },
      details_of_motion: {
        type: Sequelize.TEXT,
      },
      court: {
        type: Sequelize.STRING,
      },
      date_of_filing: {
        type: Sequelize.DATE,
      },
      judge: {
        type: Sequelize.STRING,
      },
      last_sitting_date: {
        type: Sequelize.DATE,
      },
      verdict: {
        type: Sequelize.ENUM,
        values: ['GUILTY', 'NOT_GUILTY'],
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
    await queryInterface.dropTable('Cases');
  },
};
