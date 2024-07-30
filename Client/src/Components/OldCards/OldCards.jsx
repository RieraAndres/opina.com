import OldCard from "../OldCard/OldCard";
import styles from "./OldCards.module.css"
import { useState } from 'react';


function OldCards({OldSurveys}) {
    
    const [visibleCards, setVisibleCards] = useState(3); // Mostrar inicialmente 4 tarjetas
    const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Mostrar 4 tarjetas adicionales al hacer clic en "Ver más"
    };
    
    let containerClass = styles.cardsContainer;
    if (OldSurveys.length === 1) {
        containerClass += ` ${styles.oneitem}`;
    } else if (OldSurveys.length === 2) {
        containerClass += ` ${styles.twoitems}`;
    } else if (OldSurveys.length >= 3) {
        containerClass += ` ${styles.threeitems}`;
    }

  return (
    <>
    {OldSurveys.length !== 0 ? (
      <div>
        <p className={styles.title}>Repasa viejas iniciativas</p>
        <div className={containerClass}>
          {OldSurveys.slice(0, visibleCards).map(Survey => (
            <OldCard key={Survey.id} Survey={Survey} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
        {visibleCards < OldSurveys.length && (
            <button onClick={handleShowMore} className={styles.button}>Ver más</button>
          )}
        </div>
        
      </div>
    ) : null}
    </>
    
  );
}

export default OldCards;