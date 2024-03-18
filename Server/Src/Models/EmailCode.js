const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const EmailCode = sequelize.define(
    "EmailCode",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return EmailCode;
};
