const { Router } = require("express");
const routerForSurveys = Router();

const { handlerPostResponse } = require("../Handlers/HandlerResponse");

routerForSurveys.post("/postResponse", handlerPostResponse);

module.exports = routerForSurveys;
