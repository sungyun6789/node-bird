import axios from 'axios';

export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = () => {
  return (dispatch) => {
    dispatch(loginRequestAction());
    axios
      .post('/api/login')
      .then(() => {
        dispatch(loginSuccessAction());
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };
};

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const loginSuccessAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const loginFailureAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutSuccessAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const logoutFailureAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT': {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
