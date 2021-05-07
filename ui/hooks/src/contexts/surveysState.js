import { useReducer } from "react"

import SurveyContext from "./surveysContext";
import surveyReducer from './surveyReducer'
import {
  LOADING,
  FETCH_SURVEYS,
  FETCH_SURVEYS_ERROR,
  FETCH_SURVEYS_SUCCESS,
  DELETE_SURVEYS,
  DELETE_SURVEYS_SUCCESS,
  DELETE_SURVEYS_ERROR
} from './types'

const SurveyState = props => {
  const initialState = {
    isLoading: false,
    error: false,
    errorMessage: null,
    surveys: [],
    ids: [],
  };

  const [state, dispatch] = useReducer(surveyReducer, initialState);

  // Remove alert
  const removeAlert = (id) => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        removeAlert
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default SurveyState;
