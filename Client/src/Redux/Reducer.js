import {
  CLEAR_DETAIL,
  CLEAR_NOTIFICATIONS,
  GET_DETAIL,
  GET_SURVEYS,
  POST_RESPONSE,
} from "./Actions";

let initialState = {
  allSurveys: [],
  detail: {},
  notification: "",
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
        notification: action.payload.message,
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

    default:
      return {
        ...state,
      };
  }
}
