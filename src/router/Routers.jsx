import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Inicio from "../pages/inicio/Inicio";

const Routers = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/inicio", element: <Inicio /> },
]);

export default Routers;
