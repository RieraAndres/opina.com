import styles from "../Footer/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.nav}>
            <a href={"/"} style={{textDecoration:"none"}}><p>INICIO</p></a>
            <a href={"/about"} style={{textDecoration:"none"}}><p>SOBRE OPINA.COM</p></a>
            <a href={"/about"} style={{textDecoration:"none"}}><p>PRIVACIDAD</p></a>
            <a href={"/about"} style={{textDecoration:"none"}}><p>IMPACTO</p></a>
            <a href={"/adminlogin"} style={{textDecoration:"none"}}><p>ADMIN</p></a>
        </div>
        <div className={styles.derechos}>
            <p>© 2024, Opina.com todos los derechos reservados</p>
        </div>
     </div>
  );
}

export default Footer;