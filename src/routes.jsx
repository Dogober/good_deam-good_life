import { Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import MattressIdPage from "./pages/MattressIdPage";
import MattressList from "./pages/MattressList";
import About from "./pages/About";

export const routes = [
    {path: '/home', element: <MattressList/>},
    {path: '/about', element: <About/>},
    {path: '/home/:id', element: <MattressIdPage/>},
    {path: '/cart', element: <Cart/>},
    {path: '*', element: <Navigate replace to='/home'/>}
]