const { Router } = require("express");
const routerForSurveys = Router();

const {
  handlerPostSurvey,
  handlerChangeSurveyStatus,
  handlerGetSurveyResponses,
  handlerGetAllSurveys,
} = require("../Handlers/HandlerSurvey");

routerForSurveys.post("/", handlerPostSurvey);
routerForSurveys.put("/status", handlerChangeSurveyStatus);
routerForSurveys.get("/responses/:surveyId", handlerGetSurveyResponses);
routerForSurveys.get("/all", handlerGetAllSurveys);

module.exports = routerForSurveys;
