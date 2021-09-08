import actionType from "./user.type";

export const setCurrentUser = (user) => ({
  type: actionType.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart= ()=>({
  type: actionType.GOOGLE_SIGNIN_START,
})


export const googleSignInSuccess = (user)=>({
type: actionType.GOOGLE_SIGNIN_SUCCESS,
payload: user,
})

export const googleSignInFailed = (error)=>({
  type: actionType.GOOGLE_SIGNIN_FAILED,
  payload: error,
})



export const emailSignInStart= emailAndPassword=>({
  type: actionType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
})


export const emailSignInSuccess = (user)=>({
type: actionType.EMAIL_SIGNIN_SUCCESS,
payload: user,
})

export const emailSignInFailed = (error)=>({
  type: actionType.EMAIL_SIGNIN_FAILED,
  payload: error,
})


