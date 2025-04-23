import { Link } from "react-router-dom";
import "/src/pages/login/Login.css";
import { Canvas } from "@react-three/fiber";
import LogoU from "../inicio/modelsLogin-3d/LogoU";
import { OrbitControls } from "@react-three/drei";

const Login = () => {
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
            type="text"
            className="password-text"
            placeholder=""
            id="password"
            name="password"
          />
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
            <OrbitControls />
            <ambientLight />
            <directionalLight position={[1, 1, 1]} intensity={8} />
            <LogoU position={[-40, 60, 1]} scale={30} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Login;
