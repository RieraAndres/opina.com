const { Router } = require("express");
const routes = Router();

//Imports rutas segun el modelo
const routerSurveys = require("./routeUsers.js");
const routerUsers = require("./routeSurveys.js");

routes.use("/survey", routerSurveys);
routes.use("/usuario", routerUsers);

module.exports = routes;
