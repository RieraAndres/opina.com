import { NavLink } from "react-router-dom";
import styles from "../Footer/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.nav}>
            <NavLink to="/" style={{textDecoration:"none"}}><p>INICIO</p> </NavLink>
            <NavLink to="/about" style={{textDecoration:"none"}}><p>SOBRE OPINA.NET</p></NavLink>
            <NavLink to="/about" style={{textDecoration:"none"}}><p>PRIVACIDAD</p></NavLink>
            <NavLink to="/about" style={{textDecoration:"none"}}><p>IMPACTO</p></NavLink>
        </div>
        <div className={styles.derechos}>
            <p>© 2024, opina.net.ar todos los derechos reservados</p>
        </div>
     </div>
  );
}

export default Footer;