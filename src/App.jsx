import ErrorBoundary from "./router/ErrorBoundary";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers";

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={Routers} />
    </ErrorBoundary>
  );
}

export default App;
