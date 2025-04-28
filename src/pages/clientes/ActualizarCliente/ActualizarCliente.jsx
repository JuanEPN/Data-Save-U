import { useState, useEffect } from "react";
import { db } from "../../../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import "./ActualizarCliente.css";
import { useNavigate } from "react-router-dom";

function ActualizarCliente() {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    const [formulario, setFormulario] = useState({
    nit: "",
    nombre: "",
    area: "",
    descripcion: "",
    correo: ""
  });

  // Cargar clientes existentes
  const cargarClientes = async () => {
    const snapshot = await getDocs(collection(db, "clientes"));
    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setClientes(lista);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const seleccionarCliente = (cliente) => {
    setClienteSeleccionado(cliente);
    setFormulario({
      nit: cliente.nit,
      nombre: cliente.nombre,
      area: cliente.area,
      descripcion: cliente.descripcion,
      correo: cliente.correo
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clienteSeleccionado) {
      alert("Primero selecciona un cliente.");
      return;
    }
    const clienteRef = doc(db, "clientes", clienteSeleccionado.id);
    await updateDoc(clienteRef, formulario);
    alert("Cliente actualizado exitosamente 🚀");
    setClienteSeleccionado(null);
    setFormulario({
      nit: "",
      nombre: "",
      area: "",
      descripcion: "",
      correo: ""
    });
    cargarClientes(); // Refrescar
  };

  return (
    <div className="actualizar-cliente-container">
      <h2>Actualizar Cliente</h2>
    <button 
    onClick={() => navigate("/home")}
    className="boton-volver"
    >
    Volver al Home
    </button>


      <ul>
        {clientes.map((cliente) => (
          <li 
            key={cliente.id} 
            onClick={() => seleccionarCliente(cliente)}
            className={clienteSeleccionado?.id === cliente.id ? "seleccionado" : ""}
          >
            {cliente.nombre} - {cliente.nit}
          </li>
        ))}
      </ul>

      {clienteSeleccionado && (
        <form onSubmit={handleSubmit} className="actualizar-formulario">
          <input 
            type="text" 
            name="nit" 
            placeholder="NIT" 
            value={formulario.nit} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre" 
            value={formulario.nombre} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="area" 
            placeholder="Área" 
            value={formulario.area} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="descripcion" 
            placeholder="Descripción" 
            value={formulario.descripcion} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="correo" 
            placeholder="Correo" 
            value={formulario.correo} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Actualizar Cliente</button>
        </form>
      )}
    </div>
  );
}

export default ActualizarCliente;
