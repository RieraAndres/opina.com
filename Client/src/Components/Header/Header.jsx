import styles from "../Header/Header.module.css"
function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.title}>UNA PLATAFORMA PARA EL CAMBIO</p>
      <p className={styles.number}>9.852 personas dejaron su firma</p>
    </div>
  );
}

export default Header;