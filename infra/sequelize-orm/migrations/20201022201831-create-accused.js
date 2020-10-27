module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accuseds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      case_id: {
        type: Sequelize.UUID,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      photo_url: {
        type: Sequelize.STRING,
      },
      service_branch: {
        type: Sequelize.UUID,
      },
      rank: {
        type: Sequelize.STRING,
      },
      supervising_officer_name: {
        type: Sequelize.STRING,
      },
      supervising_officer_rank: {
        type: Sequelize.STRING,
      },
      posting_state: {
        type: Sequelize.STRING,
      },
      office_address: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Accuseds');
  },
};
