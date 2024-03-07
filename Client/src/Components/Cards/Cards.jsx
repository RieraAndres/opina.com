import { useState } from 'react';
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

function Cards({surveys}) {
  const [visibleCards, setVisibleCards] = useState(3); // Mostrar inicialmente 4 tarjetas

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Mostrar 4 tarjetas adicionales al hacer clic en "Ver más"
  };

  return (
    <div>
      <p className={styles.title}>Estas son algunas de nuestras iniciativas activas</p>
      <div className={styles.cardsContainer}>
        {surveys.slice(0, visibleCards).map(Survey => (
          <Card key={Survey.id} Survey={Survey} />
          ))}
          {visibleCards < surveys.length && ( // Renderiza el botón solo si hay más tarjetas por mostrar
            <button onClick={handleShowMore} className={styles.button}>Ver más</button>
      )}
          </div>
    </div>
  );
}
export default Cards;
