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
    },
    {
      timestamps: false,
    }
  );
  return Response;
};
