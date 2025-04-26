import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers"; 

function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
