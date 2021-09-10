import actionType from "./user.type";


export const googleSignInStart= ()=>({
  type: actionType.GOOGLE_SIGNIN_START,
})


export const signInSuccess = (user)=>({
type: actionType.SIGNIN_SUCCESS,
payload: user,
})

export const signInFailed = (error)=>({
  type: actionType.SIGNIN_FAILED,
  payload: error,
})



export const emailSignInStart= emailAndPassword=>({
  type: actionType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
})



