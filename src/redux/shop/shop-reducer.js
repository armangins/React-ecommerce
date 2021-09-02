import ShopActionsTypes from "./shop.type";

const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMsg: undefined,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_START: {
      return {
        isFetching: true,
      };
    }


    case ShopActionsTypes.FETCH_FAILURE: {
      return {
        isFetching: false,
        ...state,
        errorMsg:action.payload,
      }
    }

    case ShopActionsTypes.FETCH_SUCCESS: {
      return {
        ...state,
        collections: action.payload,
        isFetching: false,

      };
    }
    default: {
      return state;
    }
  }
};
export default shopReducer;
