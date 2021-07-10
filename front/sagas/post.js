import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data) {
  return axios.post('/api/post', data);
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

function* watchAddPost() {
  yield takeEvery('ADD_POST_REQUEST', addPost);
}
export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
