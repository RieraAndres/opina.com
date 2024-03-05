const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Survey = sequelize.define(
    "Survey",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:
          "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      // Configuración para evitar que Sequelize agregue createdAt y updatedAt
      timestamps: false,
    }
  );
  return Survey;
};
