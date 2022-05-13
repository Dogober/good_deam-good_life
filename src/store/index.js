import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer as cartReducer } from "./reducers/cartReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
import { mattressIdReducer } from "./reducers/mattressIdReducer";
import { mattressListReducer } from "./reducers/mattressListReduser";

const rootReducer = combineReducers({
    mattressList: mattressListReducer,
    mattressId: mattressIdReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))