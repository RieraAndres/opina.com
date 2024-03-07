import axios from "axios";

export const GET_SURVEYS = "GET_SURVEYS";
export const GET_DETAIL = "GET_DETAIL";

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
