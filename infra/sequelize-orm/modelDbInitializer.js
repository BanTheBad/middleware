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
    config,
  );
}

const sourceFolder = path.resolve('src');

/*
 * Add folder containing a someNameModel.js file here
 *
 * Another way is to maybe pass in folder list
 * from outside where the modelDBInitializer is being called so
 * it can be seen outside this infrastructure
 *
 * Also, this can be done dynamically and filtered as needed instead of
 * hardcoding the folder names.
 *
 * ```.js
 * fs.readdirSync(path.resolve('src'))
 * .filter((folderName) => folderName !== 'app.js' && folderName !== 'server.js')
 * ```
 */
const modelsPath = ['accused', 'auth', 'cases', 'users', 'victims'];

modelsPath.forEach((moduleFolder) => {
  fs.readdirSync(path.join(`${sourceFolder}/${moduleFolder}`))
    .filter((file) => {
      return (
        file.indexOf('.') !== 0
        && file !== basename
        && file.slice(-8) === 'Model.js'
      );
    })
    .forEach((file) => {
      const model = require(path.join(sourceFolder, '/', moduleFolder, file))(
        sequelize,
        Sequelize.DataTypes,
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
