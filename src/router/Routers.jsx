import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Crear from "../pages/create/Crear";
import CrearClientes from "../pages/clientes/CrearClientes/CrearClientes";
import VerClientes from "../pages/clientes/VerCliente/VerClientes";
import Home from "../pages/home/Home";
import EliminarClientes from "../pages/clientes/EliminarClientes/EliminarClientes";
import ActualizarCliente from "../pages/clientes/ActualizarCliente/ActualizarCliente";
import BuscarCliente from "../pages/clientes/BuscarCliente/BuscarCliente";

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
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/DeleteClient",
    element: <EliminarClientes/>,
  },
  {
    path: "/UpdateClient",
    element: <ActualizarCliente/>,
  },
  {
    path: "/SearchClient",
    element: <BuscarCliente/>,
  },
]);
