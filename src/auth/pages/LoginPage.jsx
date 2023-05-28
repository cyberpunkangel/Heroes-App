import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'cyberpunkangel' );
    
    navigate( lastPath, {
      replace: true
    });
  }

  const handleMouseOver = (e) => {
    e.currentTarget.classList.add("cambio-color");
    document.querySelector(".container-1").classList.add("cambio-color");
  };
  
  const handleMouseOut = (e) => {
    e.currentTarget.classList.remove("cambio-color");
    document.querySelector(".container-1").classList.remove("cambio-color");
  };

  return (
    <div className="container-1">
      <div className="container-2">
        <div className="container contenedor mt-5">
        <h1>LoginPage</h1>
        <hr />
        <p id="text">Presiona <b>login</b> para entrar</p>
            <div className="contenedor-btn"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
              <button 
                className="btn btn-primary"

                onClick={ onLogin }
              >
                Login
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
