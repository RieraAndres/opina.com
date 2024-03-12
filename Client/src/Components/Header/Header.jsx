import styles from "../Header/Header.module.css"
function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.sloganContainer}>
        <p className={styles.title}>UNA PLATAFORMA PARA EL CAMBIO</p>
        <p className={styles.number}>9.852 personas dejaron su firma</p>
      </div>
      <div className={styles.navBar}>
        <a href={"/"} style={{textDecoration:"none"}}><p>INICIO</p></a>
        <a href={"/about"} style={{textDecoration:"none"}}><p>SOBRE OPINA.COM</p></a>
        <a href={"/about"} style={{textDecoration:"none"}}><p>PRIVACIDAD</p></a>
        <a href={"/about"} style={{textDecoration:"none"}}><p>IMPACTO</p></a>
      </div>
    </div>
  );
}

export default Header;