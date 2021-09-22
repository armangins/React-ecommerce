import actionType from "./user.type";


export const googleSignInStart= ()=>({
  type: actionType.GOOGLE_SIGNIN_START,
})

export const emailSignInStart= emailAndPassword=>({
  type: actionType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
})

export const signoutStart =()=>{
  return{
    type: actionType.SIGN_OUT_START,
  }
}


export const signInSuccess = (user)=>({
type: actionType.SIGNIN_SUCCESS,
payload: user,
})

export const signoutSuccess=()=>{
  return{
    type: actionType.SIGN_OUT_SUCCESS,
  }
}

export const signInFailed = (error)=>({
  type: actionType.SIGNIN_FAILED,
  payload: error,
})

export const signoutFailure =(error)=>{
  return{
    type: actionType.SIGN_OUT_START,
    payload:error,
  }
}

export const checkUser =()=>{
return{
  type: actionType.CHECK_USER,
}

}






