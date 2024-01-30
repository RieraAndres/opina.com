const { Router } = require("express");
const routerForUsers = Router();

const { handlerRegisterUser } = require("../Handlers/HandlerUser");

routerForUsers.post("/postUser", handlerRegisterUser); // Crea el registro para un usuario nuevo en la base de datos(crea una cuenta)

module.exports = routerForUsers;
