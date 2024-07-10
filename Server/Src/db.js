require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/opina`,
//   {
//     logging: false,
//     native: false,
//   }
// );

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Cargar todos los modelos definidos en el directorio 'models'
fs.readdirSync(path.join(__dirname, "models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "models", file));
    model(sequelize);
  });

// Obtener los modelos cargados
const { User, Survey, Response } = sequelize.models;

// Definir las relaciones entre los modelos
User.belongsToMany(Survey, { through: Response });
Survey.belongsToMany(User, { through: Response });

User.hasMany(Response);
Response.belongsTo(User);

Survey.hasMany(Response);
Response.belongsTo(Survey);

// Exportar los modelos y la instancia de Sequelize
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
