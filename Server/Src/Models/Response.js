const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Response = sequelize.define(
    "Response",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      agreed: {
        type: DataTypes.ENUM,
        values: ["si", "no"],
        allowNull: false,
        defaultValue: "no", // Valor por defecto
      },
    },
    {
      timestamps: false,
    }
  );

  return Response;
};
