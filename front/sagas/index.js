import { all, fork, call, take, put } from '@redux-saga/effects';
import axios from 'axios';

function logInAPI() {
  return axios.post('/api/login');
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function addPostAPI() {
  return axios.post('/api/post');
}

function* logIn() {
  yield put({
    type: 'LOG_IN_REQUEST',
  });
  try {
    // effect 앞에 yield가 붙음
    const result = yield call(logInAPI);
    // put = dispatch
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function* logOut() {
  yield put({
    type: 'LOG_OUT_REQUEST',
  });
  try {
    // effect 앞에 yield가 붙음
    const result = yield call(logOutAPI);
    // put = dispatch
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function* addPost() {
  yield put({
    type: 'ADD_POST_REQUEST',
  });
  try {
    // effect 앞에 yield가 붙음
    const result = yield call(addPostAPI);
    // put = dispatch
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}

/* 
call vs fork
call = 동기
fork = 비동기
*/
