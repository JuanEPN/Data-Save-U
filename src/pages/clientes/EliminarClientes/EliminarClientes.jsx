import { useState, useEffect } from "react";
import { db } from "../../../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "./EliminarClientes.css";
import { useNavigate } from "react-router-dom";


function EliminarClientes() {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);

  // Cargar todos los clientes
  const cargarClientes = async () => {
    const snapshot = await getDocs(collection(db, "clientes"));
    const clientesLista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setClientes(clientesLista);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  // Eliminar un cliente
  const eliminarCliente = async (id) => {
    const confirmar = confirm("¿Estás seguro de que quieres eliminar este cliente?");
    if (confirmar) {
      await deleteDoc(doc(db, "clientes", id));
      alert("Cliente eliminado correctamente 🚀");
      cargarClientes(); // Recargar lista
    }
  };

  return (
    <div className="eliminar-cliente-container">
      <h2>Eliminar Clientes</h2>
      <button 
      onClick={() => navigate("/home")}
      className="boton-volver"
      >
      Volver al Home
      </button>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id} className="cliente-item">
            <strong>{cliente.nombre}</strong> - {cliente.nit}
            <button onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EliminarClientes;
