const { EmailCode } = require("../../../db");

const verifyUserCode = async (userCode) => {
  try {
    // Busca un código en la base de datos que coincida con el código ingresado por el usuario
    const emailCode = await EmailCode.findOne({
      where: {
        code: userCode,
      },
    });

    if (emailCode) {
      // Verifica si el código ha expirado
      const currentTime = new Date();
      const codeExpirationTime = new Date(
        emailCode.createdAt.getTime() + 5 * 60 * 1000
      ); //los códigos expiran después de 5 minutos

      if (currentTime <= codeExpirationTime) {
        // Si el código no ha expirado, retorna verdadero
        return true;
      } else {
        // Si el código ha expirado, elimina el código de la base de datos y retorna falso
        await EmailCode.destroy({
          where: {
            id: emailCode.id,
          },
        });
        return false;
      }
    } else {
      // Si no se encuentra un código en la base de datos que coincida con el código ingresado por el usuario, retorna falso
      return false;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = verifyUserCode;
