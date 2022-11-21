import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
import { mattressListReducer } from "./reducers/mattressListReduser";
import { mattressDetailsReducer } from "./reducers/mattressDetailsReducer";


const rootReducer = combineReducers({
    mattressList: mattressListReducer,
    mattressDetails: mattressDetailsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))