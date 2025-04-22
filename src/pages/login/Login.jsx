import { Link } from "react-router-dom";
import "/src/pages/login/Login.css";
const Login = () => {
    return(
        <>
        <div className='input-group'>
            <label htmlFor="usuario">  Usuario:</label>
            <input 
            type="text" 
            className="user-text" 
            placeholder="" 
            id="usuario" 
            name="usuario" 
            />
        </ div>
        
        <div className='input-group'>
            <label htmlFor="password" >Contraseña:</label>
            <input 
            type="text" 
            className="password-text" 
            placeholder="" 
            id="password" 
            name="password"
            />
        </div>
        <Link className='btonIniciarSesion'>Iniciar Sesión</Link>
        <div className="divider-grid">
            <hr className="divider-line horizontal" />
            <span className="divider-text">O</span>
            <hr className="divider-line horizontal" />
        </div>
        <Link to="crearCuenta" className='btonCrearCuenta'>Crear una cuenta</Link>
        </>
    );
  };
  
export default Login;