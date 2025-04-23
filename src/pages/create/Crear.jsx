import React from "react";
import "./Crear.css";
import { Link } from "react-router-dom";

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
        </>
    );
};

export default Crear;