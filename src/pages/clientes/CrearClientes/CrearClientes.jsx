import { useState } from "react";
import { db } from "../../../../firebase"; 
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import "./CrearClientes.css";


function CrearClientes() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nit: "",
    nombre: "",
    area: "",
    descripcion: "",
    correo: ""
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(value)){
    setCliente({
      ...cliente,
      [name]: value
    })};
  };

  const handleNitChange = (e) => {
    const { name, value } = e.target;
    if (/^[0-9]*$/.test(value) && value.length <= 9) {
      setCliente({
      ...cliente,
      [name]: value
    })};
  };

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
    //Crear una consulta para verificar si ya existe un cliente con ese NIT
    const clientesRef = collection(db, "clientes");
    const q = query(clientesRef, where("nit", "==", cliente.nit));
    const querySnapshot = await getDocs(q);
    //Validar si ya existe
    if (!querySnapshot.empty) {
      alert('Ya existe un cliente con ese NIT ❌');
      return;
    }

    //Si no existe, agregar el nuevo cliente
      await addDoc(clientesRef, cliente);
    alert("Cliente creado exitosamente en la base de datos 🚀");

    setCliente({
      nit: "",
      nombre: "",
      area: "",
      descripcion: "",
      correo: ""
    });

  } catch (error) {
    console.error("Error al crear el cliente:", error);
    alert("Error al crear cliente ❌");
  }
  };

  return (
    <div className="crear-cliente-container">
    <button 
      onClick={() => navigate("/home")}
      className="boton-volver"
    >
    Volver al Home
    </button>
      <h2 className="crear-cliente-title">Crear Cliente</h2>
      <form onSubmit={handleSubmit} className="crear-cliente-form">
        <input 
          type="text" 
          name="nit" 
          placeholder="NIT" 
          value={cliente.nit} 
          onChange={handleNitChange} 
          required 
          maxLength={9}
        />
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre" 
          value={cliente.nombre} 
          onChange={handleNameChange} 
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

