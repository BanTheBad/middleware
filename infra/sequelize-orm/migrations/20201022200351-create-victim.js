module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Victims', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      case_id: {
        type: Sequelize.UUID,
      },
      user_id: {
        type: Sequelize.UUID,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      photo_url: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      twitter_handle: {
        type: Sequelize.STRING,
      },
      facebook_url: {
        type: Sequelize.STRING,
      },
      linkedin_url: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Victims');
  },
};
