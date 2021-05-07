import {useState, useMemo, useEffect, useCallback} from "react";

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: false,
    errorMessage: false,
    doRequest: false,
    requestIsDone: false,
    params: null
  }), [])
  const [dataState, setDataState] = useState(initialState)

  const doRequest = useCallback((params) => {
    setDataState({
      ...initialState,
      doRequest: true,
      params
    });
  }, [initialState])

  useEffect(() => {
    if (!dataState.doRequest) {
      return;
    }

    let canceled = false

    request(dataState.params)
      .then(({ data }) => !canceled && setDataState({
        data,
        loading: false,
        error: null,
        doRequest: false,
        requestIsDone: true
      }))
      .catch(error => !canceled && setDataState({
        data: null,
        loading: false,
        doRequest: false,
        error: true,
        errorMessage: error,
        requestIsDone: true
      }))

    return () => {
      canceled = true
    }
  }, [initialState, dataState.doRequest, dataState.params, request]);

  return [dataState, doRequest];
};

export default useRequest;
