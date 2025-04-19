import './login.css'

const Login = () => {
    return(
        <>
        <div className='input-group'>
            <label htmlFor="Usuario" className='Usuario'>  Usuario:</label>
            <input type="text" className="user-text" placeholder="" />
        </ div>
        
        <div className='input-group'>
            <label htmlFor="Password" >Contraseña:</label>
            <input type="text" className="password-text" placeholder="" />
        </div>
        <button className='btonIniciarSesion'>Iniciar Sesión</button>
        <div class="divider-grid">
            <hr class="divider-line horizontal" />
            <span class="divider-text">O</span>
            <hr class="divider-line horizontal" />
        </div>
        <button className='btonCrearCuenta'>Crear una cuenta</button>
        
        </>
    );
  };
  
export default Login;