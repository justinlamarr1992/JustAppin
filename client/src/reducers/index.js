import { combineReducers } from "redux";
import { activeUserReducer } from "./activeUserReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { discountReducer } from "./discountReducer";

const rootReducer = combineReducers({
  active: activeUserReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  discount: discountReducer,
});

export default rootReducer;
