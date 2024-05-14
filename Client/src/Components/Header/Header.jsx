import styles from "../Header/Header.module.css"
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.sloganContainer}>
        <p className={styles.title}>UNA PLATAFORMA PARA EL CAMBIO</p>
        <p className={styles.number}>9.852 personas dejaron su firma</p>
      </div>
      <div className={styles.navBar}>
        <NavLink to="/" style={{textDecoration:"none"}}><p>INICIO</p> </NavLink>
        <NavLink to="/about" style={{textDecoration:"none"}}><p>SOBRE OPINA.COM</p></NavLink>
        <NavLink to="/about" style={{textDecoration:"none"}}><p>PRIVACIDAD</p></NavLink>
        <NavLink to="/about" style={{textDecoration:"none"}}><p>IMPACTO</p></NavLink>
      </div>
    </div>
  );
}

export default Header;