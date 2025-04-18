import './login.css'

const Login = () => {
    return(
        <div className='input-container'>
            <button className='btonUsuario'>Usuario:</button>
            <input type="text" className="user-text" placeholder="" />
        </ div>
    );
  };
  
export default Login;