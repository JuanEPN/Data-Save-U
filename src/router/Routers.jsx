import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Crear from "../pages/create/Crear";
import CrearClientes from "../pages/clientes/CrearClientes/CrearClientes";
import VerClientes from "../pages/clientes/VerCliente/VerClientes";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/create",
    element: <Crear />,
  },
  {
    path: "/createClient",
    element: <CrearClientes />,
  },
  {
    path: "/viewClient",
    element: <VerClientes />,
  },
]);
