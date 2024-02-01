const { Router } = require("express");
const routes = Router();

//Imports rutas segun el modelo
const routerSurveys = require("./routeSurveys.js");
const routerUsers = require("./routeUsers.js");
const routerResponses = require("./routeResponse.js");

routes.use("/survey", routerSurveys);
routes.use("/user", routerUsers);
routes.use("/response", routerResponses);

module.exports = routes;
