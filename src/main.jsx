import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers"; // 👈 Ajusta la ruta si es necesario

function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
