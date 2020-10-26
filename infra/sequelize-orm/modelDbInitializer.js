const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/dbConfig.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const sourceFolder = path.resolve('src');

fs.readdirSync(path.resolve('src'))
  .filter((folderName) => folderName !== 'app.js' && folderName !== 'server.js')
  .forEach((moduleFolder) => {
    fs.readdirSync(path.join(`${sourceFolder}/${moduleFolder}`))
      .filter((file) => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file !== 'app' &&
          file.slice(-8) === 'Model.js'
        );
      })
      .forEach((file) => {
        const model = require(path.join(sourceFolder, '/', moduleFolder, file))(
          sequelize,
          Sequelize.DataTypes
        );
        db[model.name] = model;
      });
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
