import {
  FETCH_SURVEYS,
  FETCH_SURVEYS_ERROR,
  FETCH_SURVEYS_SUCCESS,
  DELETE_SURVEYS,
  DELETE_SURVEYS_SUCCESS,
  DELETE_SURVEYS_ERROR
} from './types'

export default (state, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SURVEYS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload
      };
    case FETCH_SURVEYS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        surveys: action.payload
      };
    default:
      return state;
  }
};
