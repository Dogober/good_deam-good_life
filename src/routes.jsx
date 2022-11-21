import { Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import MattressDetails from "./pages/MattressDetails";
import MattressList from "./pages/MattressList";
import Checkout from "./pages/Checkout";

export const routes = [
    {path: '/home', element: <MattressList/>},
    {path: '/home/:id', element: <MattressDetails/>},
    {path: '/cart', element: <Cart/>},
    {path: '/checkout', element: <Checkout/>},
    {path: '*', element: <Navigate replace to='/home'/>}
]