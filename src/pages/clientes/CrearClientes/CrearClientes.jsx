import { useState } from "react";
import { db } from "../../../../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 
import "./CrearClientes.css";

function CrearClientes() {
  const [cliente, setCliente] = useState({
    nit: "",
    nombre: "",
    area: "",
    descripcion: "",
    correo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "clientes"), cliente);
      alert('Cliente creado exitosamente en Firebase 🚀');
      setCliente({
        nit: "",
        nombre: "",
        area: "",
        descripcion: "",
        correo: ""
      });
    } catch (error) {
      console.error("Error al crear el cliente:", error);
      alert('Error al crear cliente ❌');
    }
  };

  return (
    <div className="crear-cliente-container">
      <h2 className="crear-cliente-title">Crear Cliente</h2>
      <form onSubmit={handleSubmit} className="crear-cliente-form">
        <input 
          type="text" 
          name="nit" 
          placeholder="NIT" 
          value={cliente.nit} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre" 
          value={cliente.nombre} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="area" 
          placeholder="Área" 
          value={cliente.area} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="descripcion" 
          placeholder="Descripción" 
          value={cliente.descripcion} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="correo" 
          placeholder="Correo" 
          value={cliente.correo} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
}

export default CrearClientes;

