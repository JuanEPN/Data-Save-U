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
        <button className='btonIniciarSesion'>Iniciar Sesión</button>
        <div className="divider-grid">
            <hr className="divider-line horizontal" />
            <span className="divider-text">O</span>
            <hr className="divider-line horizontal" />
        </div>
        <button className='btonCrearCuenta'>Crear una cuenta</button>

        </>
    );
  };
  
export default Login;