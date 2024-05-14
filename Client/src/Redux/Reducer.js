import {
  CLEAR_DETAIL,
  CLEAR_NOTIFICATIONS,
  GET_DETAIL,
  GET_SURVEYS,
  POST_RESPONSE,
  POSITIVE_CODE_VERIFICATION,
  NEGATIVE_CODE_VERIFICATION,
  GET_SURVEY_RESPONSES,
  CLEAR_RESPONSES,
} from "./Actions";

let initialState = {
  allSurveys: [],
  responses: [],
  detail: {},
  notification: "",
  adminLogin: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS:
      return {
        ...state,
        allSurveys: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_RESPONSE: {
      return {
        ...state,
        notification: action.payload,
      };
    }

    case POSITIVE_CODE_VERIFICATION: {
      return {
        ...state,
        adminLogin: true,
      };
    }

    case NEGATIVE_CODE_VERIFICATION: {
      return {
        ...state,
        notification: "Codigo incorrecto intentalo nuevamente",
      };
    }

    case GET_SURVEY_RESPONSES: {
      console.log(action.payload);
      return {
        ...state,
        responses: action.payload,
      };
    }

    case CLEAR_DETAIL: {
      return {
        ...state,
        detail: {},
      };
    }

    case CLEAR_NOTIFICATIONS: {
      return {
        ...state,
        notification: "",
      };
    }

    case CLEAR_RESPONSES: {
      return {
        ...state,
        responses: [],
      };
    }

    default:
      return {
        ...state,
      };
  }
}
