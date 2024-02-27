import styles from "../Footer/Footer.module.css"
function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.nav}>
            <p>INICIO</p>
            <p>SOBRE OPINA.COM</p>
            <p>PRIVACIDAD</p>
            <p>IMPACTO</p>
        </div>
        <div className={styles.derechos}>
            <p>© 2024, Opina.com todos los derechos reservados</p>
        </div>
     </div>
  );
}

export default Footer;