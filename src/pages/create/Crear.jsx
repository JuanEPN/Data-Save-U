import React from "react";
import "./Crear.css";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import LogoU from "../inicio/modelsLogin-3d/LogoU";
import { Text3D } from "@react-three/drei";

const Crear = () => {
    return(
        <>
        <div className="group">
            <label htmlFor="name"> Nombre de Usuario:</label>
            <input type="text" className="name-text" placeholder="" id="name" name="name"/>
        </div>

        <div className="group">
            <label htmlFor="email"> Email:</label>
            <input type="text" className="email-text" placeholder="" id="email" name="email" ></input>
        </div>

        <div className="group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="text" className="contraseña-text" placeholder="" id="contraseña" name="contraseña"></input>
        </div>

        <div className="group">
            <label htmlFor="contraseñaB">Confirmar Contraseña:</label>
            <input type="text" className="contraseñaB-text" placeholder="" id="contraseñaB" name="contraseñaB"></input>
        </div>
        <Link className="registrarse"> Registrarse </Link>
        <div className="Logo">
          <Canvas>
            <ambientLight />
            <directionalLight position={[0, 25, -60]} intensity={8} />
            <LogoU position={[-1.3, -2.7, -2]} scale={70} />
            <Text3D position={[-1.5, -2.6, 0]} 
            font="/fonts/Blue Ocean_Regular.json"
            bevelEnabled
            bevelSize={0.01}
            bevelThickness={0.01}
            height={0.1}
            size={0.5}
            >
              {" DATA SAVE "}
              <meshStandardMaterial color= "black"/>
            </Text3D>
          </Canvas>
        </div>
        </>
    );
};

export default Crear;