import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import menuReducer from "./menu/menu-reducer";
import shopReducer from "./shop/shop-reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
