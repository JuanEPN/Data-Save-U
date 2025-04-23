import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Crear from "../pages/create/Crear";


const Routers = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/create", element: <Crear/>}, 
]);

export default Routers;
