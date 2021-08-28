
import ShopActionsTypes from "./shop.type";

const INIT_STATE = {
  collections: null,
};


const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};
export default shopReducer;
