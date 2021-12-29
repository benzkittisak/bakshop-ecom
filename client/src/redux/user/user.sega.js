import { takeLatest, all, call, put } from "redux-saga/effects";
import userActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createProfileDocument,
} from "../../firebase/firebase.util";

export function* getSnapshopFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createProfileDocument, userAuth, additionalData);
    const snapShop = yield userRef.get();
    yield put(signInSuccess({ id: snapShop.id, ...snapShop.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshopFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
