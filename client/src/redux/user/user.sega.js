import { takeLatest, all, call, put } from "redux-saga/effects";
import userActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
  updateDataSuccess,
  updateDataFailure,
  updateProfileImageFailure,
  updateProfileImageSuccess
} from "./user.actions";

import {
  auth,
  googleProvider,
  createProfileDocument,
  getCurrentUser,
  updateProfileDocument,
  updateProfileImage
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

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshopFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userRef = yield getCurrentUser();
    if (!userRef) return;
    yield getSnapshopFromUserAuth(userRef);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpStarting({ payload: { email, displayName, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOut() {
  try {
    auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    yield getSnapshopFromUserAuth(user , additionalData)
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* updateDataStart({payload}){
  try {
    const user = yield updateProfileDocument(payload);
    yield put(updateProfileImageSuccess(user));
  } catch (error) {
    yield put(updateProfileImageFailure(error))
  }

}

export function* updateImageStart({payload:{userData , imageFile}}) {
    try {
      const user = yield call(updateProfileImage , userData , imageFile)
      yield put(updateDataSuccess(user))
    } catch (error) {
      yield put(updateDataFailure(error))
    }
}


export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStarting);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onUpdateStart(){
  yield takeLatest(userActionTypes.UPDATE_USER_START , updateDataStart);
}

export function* onUpdatePtofileImageStart(){
  yield takeLatest(userActionTypes.UPDATE_USER_PROFILE_IMAGE_START , updateImageStart)
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onUpdateStart),
    call(onUpdatePtofileImageStart)
  ]);
}
