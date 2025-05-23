import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./VerClientes.css"; // Puedes hacerle un CSS bonito aparte
import { useNavigate } from "react-router-dom";

function VerClientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "clientes"), (snapshot) => {
      const clientesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClientes(clientesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="ver-clientes-container">
      <button onClick={() => navigate("/home")} className="boton-volver">
        Volver al Home
      </button>
      <h2 className="ver-clientes-title">Lista de Clientes</h2>
      <div className="table-responsive">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>NIT</th>
              <th>Nombre</th>
              <th>Área</th>
              <th>Descripción</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nit}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.area}</td>
                <td>{cliente.descripcion}</td>
                <td>{cliente.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VerClientes;
