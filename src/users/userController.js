const { User } = require('../shared/modelsDBInstance');

const getAllUsers = async (req, res) => {
  try {
    const jane = await User.create({ firstName: 'Jane', lastName: 'Doe' });
    res.json(jane);
  } catch (error) {
    res.send('Error');
  }
};

const getUser = () => {};

const addUser = () => {};

const updateUser = () => {};

const deleteUser = () => {};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
