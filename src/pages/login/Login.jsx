import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import "/src/pages/login/Login.css";
import { Canvas } from "@react-three/fiber";
import LogoU from "../inicio/modelsLogin-3d/LogoU";
import { Text3D } from "@react-three/drei";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const loginWithEmailAndPassword = useAuthStore((state) => state.loginWithEmailAndPassword);

  const handleLogin = async () => {
    const email = usuario === "Admon" ? "admon@example.com" : usuario;

    try {
      await loginWithEmailAndPassword(email, password);
      console.log("¡Login exitoso!");
      navigate("/Home"); // Redirecciona al Dashboard
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div>
        <div className="input-group">
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            className="user-text"
            placeholder=""
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePassword}
            className="show-password-btn"
          >
            {showPassword ? "Ocultar" : "Ver"}
          </button>
        </div>

        <button className="btonIniciarSesion" onClick={handleLogin}>
          Iniciar Sesión
        </button>

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
            <directionalLight position={[0, 20, -60]} intensity={8} />
            <LogoU position={[-3, -4, -2]} scale={160} />
            <Text3D
              position={[-2.6, -3.5, 0]}
              font="/fonts/Blue Ocean_Regular.json"
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0.01}
              height={0.2}
              size={0.9}
            >
              {" DATA SAVE "}
              <meshStandardMaterial color="black" />
            </Text3D>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Login;

