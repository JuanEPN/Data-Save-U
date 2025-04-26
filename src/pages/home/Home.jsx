import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Menú Principal</h1>
      <div className="buttons-container">
        <button onClick={() => navigate("/createClient")} className="menu-button">
          Crear Cliente
        </button>
        <button onClick={() => navigate("/viewClient")} className="menu-button">
          Ver Clientes
        </button>
        <button onClick={() => navigate("/otra-opcion-1")} className="menu-button">
          Otra Opción 1
        </button>
        <button onClick={() => navigate("/otra-opcion-2")} className="menu-button">
          Otra Opción 2
        </button>
      </div>
    </div>
  );
}

export default Home;
