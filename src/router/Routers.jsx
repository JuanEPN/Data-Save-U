import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Crearcuenta from "../pages/create/crearCuenta";

const Routers = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/inicio", element: <Inicio /> },
    { path: "/crearCuenta", element: < Crearcuenta/>}, 
]);

export default Routers;
