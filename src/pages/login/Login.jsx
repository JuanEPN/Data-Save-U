import { Link } from "react-router-dom";
import "/src/pages/login/Login.css";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import LogoU from "../inicio/modelsLogin-3d/LogoU";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <div className="input-group">
          <label htmlFor="usuario"> Usuario:</label>
          <input
            type="text"
            className="user-text"
            placeholder=""
            id="usuario"
            name="usuario"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="password-text"
            placeholder=""
            id="password"
            name="password"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="show-password-btn"
          >
            {showPassword ? "Ocultar" : "Ver"}
          </button>
        </div>
        <Link className="btonIniciarSesion">Iniciar Sesión</Link>
        <div className="divider-grid">
          <hr className="divider-line horizontal" />
          <span className="divider-text">O</span>
          <hr className="divider-line horizontal" />
        </div>
        <Link to="create" className="btonCrearCuenta">
          Crear una cuenta
        </Link>

        <div className="Logo">
          <Canvas>
            <ambientLight />
            <directionalLight position={[0, 25, -60]} intensity={8} />
            <LogoU position={[-1, -5, -2]} scale={90} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Login;
