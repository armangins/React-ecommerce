import actionType from "./user.type";

const INIT_STATE = {
  currentUser: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
