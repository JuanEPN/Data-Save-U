import React, { useState } from "react";
import "./Crear.css";
import { Canvas } from "@react-three/fiber";
import LogoU from "../inicio/modelsLogin-3d/LogoU";
import { Text3D } from "@react-three/drei";

const Crear = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!name.trim()) {
      nuevosErrores.name = "El nombre es obligatorio";
    }

    if (!email.includes("@") || !email.includes(".")) {
      nuevosErrores.email = "El correo electrónico no es válido";
    }

    if (password.length < 6) {
      nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (password !== confirmPassword) {
      nuevosErrores.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      alert("Registro exitoso ✅");
      // Aquí podrías conectar con Firebase para guardar los datos
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="group">
        <label htmlFor="name">Nombre de Usuario:</label>
        <div className="input-wrapper">
          <input
            type="text"
            className="name-text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
      </div>

      <div className="group">
        <label htmlFor="email">Email:</label>
        <div className="input-wrapper">
          <input
            type="email"
            className="email-text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
      </div>

      <div className="group">
        <label htmlFor="contraseña">Contraseña:</label>
        <div className="input-wrapper">
          <input
            type="password"
            className="contraseña-text"
            id="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
      </div>

      <div className="group">
        <label htmlFor="contraseñaB">Confirmar Contraseña:</label>
        <div className="input-wrapper">
          <input
            type="password"
            className="contraseñaB-text"
            id="contraseñaB"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <button type="submit" className="registrarse">
        Registrarse
      </button>

      <div className="Logo1">
        <Canvas>
          <ambientLight />
          <directionalLight position={[0, 25, -60]} intensity={8} />
          <LogoU position={[-1.3, -3.0, -2]} scale={70} />
          <Text3D
            position={[-1.5, -2.5, 0]}
            font="/fonts/Blue Ocean_Regular.json"
            bevelEnabled
            bevelSize={0.01}
            bevelThickness={0.01}
            height={0.1}
            size={0.5}
          >
            {" DATA SAVE "}
            <meshStandardMaterial color="black" />
          </Text3D>
        </Canvas>
      </div>
    </form>
  );
};

export default Crear;
