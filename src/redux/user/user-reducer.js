import actionType from "./user.type";

const INIT_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

   

    case actionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser:action.payload,
        error:null,
      };

      case actionType.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser:null,
          error:null,
        }

    case actionType.SIGN_IN_FAILED:
      case actionType.SIGN_OUT_FAILED:

      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
