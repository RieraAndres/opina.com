import styles from "../Card/Card.module.css";
import { NavLink } from "react-router-dom";

function Card({ Survey }) {
  const { title, imgUrl, description, id, responseCount } = Survey; // Traigo por props lo que renderizo
  
  // Función para recortar y ajustar la descripción
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return (
        <div>
          {text.slice(0, maxLength)}
          <NavLink to={`/detail/${id}`} style={{textDecoration:"none"}}><span className={styles.verMas}> VER MÁS...</span></NavLink>
        </div>
      );
    }
  };

  // Truncar la descripción si excede los 337 caracteres
  const truncatedDescription = truncateDescription(description, 250);

  // Convertir responseCount a un número
  const responseCountNumber = parseInt(responseCount);
  
  return (
    <div className={styles.Card}> {/* Div contenedor de toda la Card */}
      <div className={styles.imgContainer}> 
        <img src={imgUrl} alt="" className={styles.Img} />
      </div>
      <div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{truncatedDescription}</p>
        </div>
        <div className={styles.cardFooter}>
          {responseCountNumber === 0 ? (
            <p>Sé el primero en dar tu apoyo!</p>
          ) : (
            <p>{responseCountNumber} personas dejaron su firma</p>
          )}
          <NavLink to={`/detail/${id}`}><button className={styles.button}>Firma aquí</button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
