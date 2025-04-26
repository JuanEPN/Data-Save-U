import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import "/src/pages/login/Login.css";
import { Canvas } from "@react-three/fiber";
import LogoU from "../inicio/modelsLogin-3d/LogoU";
import { Text3D } from "@react-three/drei";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // para redireccionar luego del login
  const loginWithEmailAndPassword = useAuthStore((state) => state.loginWithEmailAndPassword);

  const handleLogin = async () => {
    const email = usuario === "Admon" ? "admon@example.com" : usuario; // 👈 traducimos "Admon" a un correo real

    try {
      await loginWithEmailAndPassword(email, password);
      console.log("¡Login exitoso!");
      navigate("/create"); // cambia a donde quieras redirigir
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
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
            type="password"
            className="password-text"
            placeholder=""
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <directionalLight position={[0, 25, -60]} intensity={8} />
            <LogoU position={[-1, -2.5, -2]} scale={70} />
            <Text3D
              position={[-1.3, -2.5, 0]}
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
      </div>
    </>
  );
};

export default Login;
