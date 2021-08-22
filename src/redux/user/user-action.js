import actionType from "./user.type";

export const setCurrentUser = (user) => ({
  type: actionType.SET_CURRENT_USER,
  payload: user,
});
