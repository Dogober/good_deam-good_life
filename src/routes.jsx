import { Navigate } from "react-router-dom";
import About from "./components/About";
import MattressIdPage from "./components/MattressIdPage";
import MattressList from "./components/MattressList";

export const routes = [
    {path: '/', element: <MattressList/>},
    {path: '/about', element: <About/>},
    {path: '/:id', element: <MattressIdPage/>},
    {path: '*', element: <Navigate replace to='/'/>}
]