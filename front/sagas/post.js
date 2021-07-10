import { all, fork, takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post';

// function addPostAPI(data) {
//   return axios.post('/api/post', data);
// }

function* addPost() {
  try {
    // effect 앞에 yield가 붙음
    // const result = yield call(addPostAPI);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// function addCommentAPI(data) {
//   return axios.post(`/api/post/${id}/comment`, data);
// }

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeEvery(ADD_POST_REQUEST, addPost);
}

function* watchAddCommentPost() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddCommentPost)]);
}
