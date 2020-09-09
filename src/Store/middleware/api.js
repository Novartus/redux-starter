import axios from "axios";
import * as ACTIONS from "../api";

const baseURL = "http://localhost:9001/api";

const api = (store) => (next) => async (action) => {
  if (action.type !== ACTIONS.apiCallBegan.type) {
    return next(action);
  }

  const { url, data, method, onStart, onSuccess, onError } = action.payload;

  if (onStart) {
    store.dispatch({ type: onStart });
  }

  next(action);

  try {
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
    });

    store.dispatch(ACTIONS.apiCallSuccess(response.data)); //General Success

    //Specific
    if (onSuccess) {
      store.dispatch({
        type: onSuccess,
        payload: response.data,
      });
    }
  } catch (error) {
    store.dispatch(ACTIONS.apiCallFailed(error.message)); //General Error
    //Specific
    if (onError) {
      store.dispatch({
        type: onError,
        payload: error.message,
      });
    }
  }
};

export default api;
