export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      console.log('reducer logIn');
      return {
        ...state,
        isLoggingIn: false,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'sungyun' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case 'LOG_OUT_REQUEST': {
      return {
        ...state,
        isLoggingOut: true,
      };
    }
    case 'LOG_OUT_SUCCESS': {
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    }
    case 'LOG_OUT_FAILURE': {
      return {
        ...state,
        isLoggingOut: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
