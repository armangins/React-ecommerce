import  actionType  from './user-actionType'


export const setCurrentUser = (user) => {
  return {
    type: actionType.SET_CURRENT_USER,
    payload: user,
  };
};
