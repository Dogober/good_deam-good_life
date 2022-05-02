import { Navigate } from "react-router-dom";
import About from "./components/About";
import Basket from "./components/Basket";
import MattressIdPage from "./components/MattressIdPage";
import MattressList from "./components/MattressList";

export const routes = [
    {path: '/home', element: <MattressList/>},
    {path: '/about', element: <About/>},
    {path: '/home/:id', element: <MattressIdPage/>},
    {path: '/busket', element: <Basket/>},
    {path: '*', element: <Navigate replace to='/home'/>}
]