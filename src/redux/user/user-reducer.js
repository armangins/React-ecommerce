import actionType from "./user.type";

const INIT_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.EMAIL_SIGNIN_SUCCESS:
    case actionType.GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser:action.payload,
        error:null,
      };

    case actionType.EMAIL_SIGNIN_FAILED:
    case actionType.GOOGLE_SIGNIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
