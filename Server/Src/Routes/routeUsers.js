const { Router } = require("express");
const routerForUsers = Router();

const {
  handlerRegisterUser,
  handlerSendEmailCode,
  handlerVerifyCode,
} = require("../Handlers/HandlerUser");

routerForUsers.post("/postUser", handlerRegisterUser); // Crea el registro para un usuario nuevo en la base de datos(crea una cuenta)
routerForUsers.post("/sendCode", handlerSendEmailCode); //Crea, guarda en la db y envia el codigo por mail
routerForUsers.post("/verify", handlerVerifyCode); // Verifica el codigo ingresado por el usuario
module.exports = routerForUsers;
