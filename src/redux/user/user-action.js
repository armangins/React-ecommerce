import actionType from "./user.type";

export const googleSignInStart = () => ({
  type: actionType.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: actionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signoutStart = () => {
  return {
    type: actionType.SIGN_OUT_START,
  };
};

export const signInSuccess = (user) => ({
  type: actionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signoutSuccess = () => {
  return {
    type: actionType.SIGN_OUT_SUCCESS,
  };
};

export const signInFailed = (error) => ({
  type: actionType.SIGN_IN_FAILED,
  payload: error,
});

export const signoutFailure = (error) => {
  return {
    type: actionType.SIGN_OUT_START,
    payload: error,
  };
};

export const signUpStart = (userData) => {
  return {
    type: actionType.SIGN_UP_START,
    payload: userData,
  };
};

export const signUpSucess = ({ user, data }) => {
  return {
    type: actionType.SIGN_UP_SUCESS,
    payload: { user, data },
  };
};

export const signUpFailed = (error) => {
  return {
    type: actionType.SING_UP_FAILED,
    payload: error,
  };
};

export const checkUser = () => {
  return {
    type: actionType.CHECK_USER,
  };
};
