import userActionTypes from "./user.types";

// Sign in Actions
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signOutSuccess = () => ({
    type:userActionTypes.SIGN_OUT_SUCCESS
})

export const signUpStart = user => ({
    type:userActionTypes.SIGN_UP_START,
    payload:user
})

export const signUpSuccess = ({user , additionalData}) => ({
    type:userActionTypes.SIGN_UP_SUCCESS,
    payload:{user , additionalData}
})

export const signUpFailure = error => ({
    type:userActionTypes.SIGN_UP_FAILURE,
    payload:error
})

export const updateDataStart = (userData) => ({
  type:userActionTypes.UPDATE_USER_START,
  payload:userData
})

export const updateDataSuccess = (userData) => ({
  type:userActionTypes.UPDATE_USER_SUCCESS,
  payload:userData
})

export const updateDataFailure = error => ({
  type:userActionTypes.UPDATE_USER_FAILURE,
  payload:error
})

export const updateProfileImageStart = (userData , imageFile) => ({
  type:userActionTypes.UPDATE_USER_PROFILE_IMAGE_START,
  payload:userData
})

export const updateProfileImageSuccess = (userData) => ({
  type:userActionTypes.UPDATE_USER_PROFILE_IMAGE_SUCCESS,
  payload:userData
})

export const updateProfileImageFailure = error => ({
  type:userActionTypes.UPDATE_USER_PROFILE_IMAGE_FAILURE,
  payload:error
})