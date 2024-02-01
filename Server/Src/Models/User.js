const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: true,
        },
      },
      whatsapp: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
