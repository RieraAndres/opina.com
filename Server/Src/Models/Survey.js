const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Survey = sequelize.define("Survey", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Survey;
};
