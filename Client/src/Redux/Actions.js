import axios from "axios";

export const GET_SURVEYS = "GET_SURVEYS";
export const GET_DETAIL = "GET_DETAIL";
export const POST_RESPONSE = "POST_RESPONSE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";
export const CLEAR_RESPONSES = "CLEAR_RESPONSES";
export const SEND_CODE = "SEND_CODE";
export const POSITIVE_CODE_VERIFICATION = "POSITIVE_CODE_VERIFICATION";
export const NEGATIVE_CODE_VERIFICATION = "NEGATIVE_CODE_VERIFICATION";
export const CHANGE_SURVEY_STATUS = "CHANGE_SURVEY_STATUS";
export const GET_SURVEY_RESPONSES = "GET_RESPONSES";
export const GET_DATABASE = "GET_DATABASE";
export const POST_SURVEY = "POST_SURVEY";
export const CLOSE_SESSION = "CLOSE_SESSION";
export const DELETE_SURVEY = "DELETE_SURVEY";

export function getSurveys() {
  return async function (dispatch) {
    try {
      const response = await axios("/survey/all"); //traigo SURVEYS
      return dispatch({
        type: "GET_SURVEYS",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`/survey/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function postResponse({
  name,
  lastName,
  dni,
  whatsapp,
  surveyId,
  agreed,
}) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "/response/postResponse",
        { name, lastName, dni, whatsapp, surveyId, agreed } // envolver input en un objeto con clave 'data'
      );
      if (response.status === 201 || response.status === 200) {
        return dispatch({
          type: "POST_RESPONSE",
          payload: "Respuesta guardada con exito",
        });
      }
    } catch (error) {
      return dispatch({
        type: "POST_RESPONSE",
        payload: "Ya firmaste esta peticion u ocurrio algun error",
      });
    }
  };
}

export function sendCode() {
  return async function (dispatch) {
    try {
      await axios.post("/user/sendCode");
    } catch (error) {
      return error.message;
    }
  };
}

export function verifyCode(userCode) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/user/verify", {
        userCode,
      });
      if (response.status === 400) {
        return dispatch({
          type: "NEGATIVE_CODE_VERIFICATION",
          payload: response.data.valid,
        });
      } else if (response.status === 200) {
        return dispatch({
          type: "POSITIVE_CODE_VERIFICATION",
          payload: response.data.valid,
        });
      }
    } catch (error) {
      return error.message;
    }
  };
}

export function changeSurveyStatus(id) {
  return async function (dispatch) {
    try {
      const response = await axios.put("/survey/status", {
        id,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function getSurveyResponses(surveyId) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/survey/responses/${surveyId}`);
      return dispatch({
        type: "GET_SURVEY_RESPONSES",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function getDataBase() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/user/getAll");
      return dispatch({
        type: "GET_DATABASE",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function postSurvey(title, description, imgUrl) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/survey", {
        title,
        description,
        imgUrl,
      });
      return dispatch({
        type: "POST_SURVEY",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function deleteSurvey(surveyId) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/survey/delete/${surveyId}`);
      return dispatch({
        type: "DELETE_SURVEY",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function closeSession() {
  return {
    type: "CLOSE_SESSION",
  };
}

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}

export function clearNotifications() {
  return {
    type: "CLEAR_NOTIFICATIONS",
  };
}

export function clearResponses() {
  return {
    type: "CLEAR_RESPONSES",
  };
}
