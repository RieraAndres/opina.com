import styles from "../Header/Header.module.css"
import { NavLink } from 'react-router-dom';
import MenuDesp from "../MenuDesp/MenuDesp";
import React, { useState, useEffect } from 'react';


function Header() {

  // Menu desplegable
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  const actualizarAnchoPantalla = () => {
    setAnchoPantalla(window.innerWidth);
  };

  // Agrega un efecto para escuchar cambios en el ancho de la pantalla
  useEffect(() => {
    window.addEventListener('resize', actualizarAnchoPantalla);
    // Limpia el efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', actualizarAnchoPantalla);
    };
  }, []);
  return (
    <div>
       {anchoPantalla > 500 ? (
      <div className={styles.headerContainer}>
      <div className={styles.sloganContainer}>
        <p className={styles.title}>UNA PLATAFORMA PARA EL CAMBIO</p>
        <p className={styles.number}>9.852 personas dejaron su firma</p>
      </div>
      <div className={styles.navBar}>
        <NavLink to="/" style={{textDecoration:"none"}}><p>INICIO</p> </NavLink>
        <NavLink to="/about" style={{textDecoration:"none"}}><p>SOBRE OPINA.NET</p></NavLink>
        <NavLink to="/politicas-de-privacidad" style={{textDecoration:"none"}}><p>PRIVACIDAD</p></NavLink>
        <NavLink to="/about" style={{textDecoration:"none"}}><p>IMPACTO</p></NavLink>
      </div>
    </div>
    ):(
      <div className={styles.headerContainer}>
      <div className={styles.sloganContainer}>
        <p className={styles.title}>UNA PLATAFORMA PARA EL CAMBIO</p>
        <p className={styles.number}>9.852 personas dejaron su firma</p>
        <MenuDesp></MenuDesp>
      </div>
      </div>
    )}
    </div>
  );
}

export default Header;