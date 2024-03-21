import axios from "axios";

export const GET_SURVEYS = "GET_SURVEYS";
export const GET_DETAIL = "GET_DETAIL";
export const POST_RESPONSE = "POST_RESPONSE";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";
export const SEND_CODE = "SEND_CODE";
export const POSITIVE_CODE_VERIFICATION = "POSITIVE_CODE_VERIFICATION";
export const NEGATIVE_CODE_VERIFICATION = "NEGATIVE_CODE_VERIFICATION";
export const CHANGE_SURVEY_STATUS = "CHANGE_SURVEY_STATUS";

export function getSurveys() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/survey/all"); //traigo SURVEYS
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
      const response = await axios(`http://localhost:3001/survey/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function postResponse({ name, lastName, dni, whatsapp, surveyId }) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/response/postResponse",
        { name, lastName, dni, whatsapp, surveyId } // envolver input en un objeto con clave 'data'
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
      await axios.post("http://localhost:3001/user/sendCode");
    } catch (error) {
      return error.message;
    }
  };
}

export function verifyCode(userCode) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/user/verify", {
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
      const response = await axios.put("http://localhost:3001/survey/status", {
        id,
      });
    } catch (error) {
      return error.message;
    }
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
